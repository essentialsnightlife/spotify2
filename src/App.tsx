import "./App.css";
import { useCallback, useEffect, useState } from "react";
import {
  fetchProfile,
  fetchUserTopItems,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "./apis/spotify";
import {
  FetchUserTopItemsParams,
  SpotifyItem,
  SpotifyTopArtistsTracksResponse,
  UserProfile,
} from "./types";
import { cookieMaxAge, sessionCookie } from "./constants";
import LoginPage from "@/components/Pages/LoginPage";
import { SpotifyStats } from "@/components/Pages/SpotifyStats";
import { useNavigate } from "react-router-dom";
import { ErrorObject } from "ajv";
import { getCookie } from "./helpers";

function App() {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const storedProfile = localStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : null;
  });
  const [topArtists, setTopArtists] = useState<SpotifyItem[] | null>(() => {
    const storedTopArtists = localStorage.getItem("topArtists");
    return storedTopArtists ? JSON.parse(storedTopArtists) : null;
  });
  const [topTracks, setTopTracks] = useState<SpotifyItem[] | null>(() => {
    const storedTopTracks = localStorage.getItem("topTracks");
    return storedTopTracks ? JSON.parse(storedTopTracks) : null;
  });
  const [failedFetch, setFailedFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const authCode = params.get("code");

  const accessToken = getCookie(sessionCookie);
  const navigate = useNavigate();

  const fetchAndStoreToken = async () => {
    if (!authCode || failedFetch) {
      await redirectToAuthCodeFlow();
      return;
    }
  };

  const fetchAccessToken = useCallback(async () => {
    if (!authCode) {
      return;
    }
    setLoading(true);
    await getAccessToken(authCode)
      .then((token: string) => {
        document.cookie = `${sessionCookie}=${token}; max-age=${cookieMaxAge}; Secure;`;
      })
      .then(() => {
        navigate("/");
      })
      .catch((e: ErrorObject) => {
        console.error("Error fetching access token:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authCode]);

  const periods = [
    { queryParam: "short_term", label: "Very Recent" },
    {
      queryParam: "medium_term",
      label: "Recent",
      default: true,
    },
    { queryParam: "long_term", label: "Long Term" },
  ];

  const handlePeriodChange = async (
    timeRange: FetchUserTopItemsParams["time_range"],
    type: "artists" | "tracks"
  ) => {
    try {
      await fetchUserTopItems({ type, time_range: timeRange, limit: 10 }).then(
        (response: SpotifyTopArtistsTracksResponse) => {
          if (type === "artists") {
            setTopArtists(response.items);
          } else {
            setTopTracks(response.items);
          }
        }
      );
    } catch (e) {
      // @ts-expect-error unauthorized
      if (e.message === "Unauthorized") {
        setFailedFetch(true);
      }
      console.error("Error fetching top items:", e);
    }
  };

  useEffect(() => {
    if (!accessToken || (profile && topTracks && topArtists)) {
      return;
    }

    Promise.all([
      fetchProfile(),
      fetchUserTopItems({
        type: "artists",
        time_range: "medium_term",
        limit: 10,
      }),
      fetchUserTopItems({
        type: "tracks",
        time_range: "medium_term",
        limit: 10,
      }),
    ])
      .then(([profile, topArtists, topTracks]) => {
        if (profile) {
          setProfile(profile);
          localStorage.setItem("profile", JSON.stringify(profile));
        }
        setTopArtists(topArtists.items);
        localStorage.setItem("topArtists", JSON.stringify(topArtists.items));
        setTopTracks(topTracks.items);
        localStorage.setItem("topTracks", JSON.stringify(topTracks.items));
      })
      .catch((e) => {
        console.error("Error fetching profile and top artists:", e);
        setFailedFetch(true);
      });
  }, [accessToken]);

  // get access token
  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!accessToken) {
    return <LoginPage onClick={fetchAndStoreToken} />;
  }

  return (
    <SpotifyStats
      profile={profile}
      topArtists={topArtists}
      topTracks={topTracks}
      periods={periods}
      onChange={handlePeriodChange}
    />
  );
}

export default App;
