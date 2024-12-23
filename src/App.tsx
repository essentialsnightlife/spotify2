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
import { getCookie } from "./helpers";

function App() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [topArtists, setTopArtists] = useState<SpotifyItem[] | null>(null);
  const [topTracks, setTopTracks] = useState<SpotifyItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(
    getCookie(sessionCookie)
  );

  const navigate = useNavigate();
  const authCode = new URLSearchParams(window.location.search).get("code");

  const fetchAccessToken = useCallback(async () => {
    if (!authCode || accessToken) return;

    try {
      setLoading(true);
      const token = await getAccessToken(authCode);
      if (token) {
        document.cookie = `${sessionCookie}=${token}; max-age=${cookieMaxAge}; Secure;`;
        setAccessToken(token);
        navigate("/"); //i.e. spotifyStats
      }
    } catch (error) {
      alert("Failed to authenticate. Please try again or contact admin.");
      console.error("Error fetching access token:", error);
    } finally {
      setLoading(false);
    }
  }, [authCode, accessToken, navigate]);

  const fetchProfileData = useCallback(async () => {
    if (!accessToken) return;

    try {
      setLoading(true);
      const [userProfile, artistResponse, trackResponse] = await Promise.all([
        fetchProfile(accessToken),
        fetchUserTopItems({ type: "artists", time_range: "medium_term", limit: 10 }, accessToken),
        fetchUserTopItems({ type: "tracks", time_range: "medium_term", limit: 10 }, accessToken),
      ]);

      setProfile(userProfile);
      setTopArtists(artistResponse.items);
      setTopTracks(trackResponse.items);
    } catch (error) {
      alert("Error fetching your data, please try again or contact the admin if error persists");
      console.error("Error fetching profile data:", error);
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  const handlePeriodChange = async (
    timeRange: FetchUserTopItemsParams["time_range"],
    type: "artists" | "tracks"
  ) => {
    try {
      await fetchUserTopItems({ type, time_range: timeRange, limit: 10 }, accessToken).then(
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
        console.error("Error fetching top items:", e);
        alert("Error updating your data, please login again or contact the admin if error persists")
        document.cookie = `${sessionCookie}=; max-age=0; Secure;`;
        localStorage.removeItem("verifier");
        document.location.reload();
      }
      alert("Error updating your stats, please try again or contact the admin if error persists")
      console.error("Error for handlePeriodChange:", e);
    }
  };

  const handleLogin = async () => {
    await redirectToAuthCodeFlow();
  };

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  useEffect(() => {
    if (accessToken) {
      fetchProfileData();
    }
  }, [accessToken, fetchProfileData]);

  if (loading) return <>Fetching your Spotify Stats...</>;
  if (!accessToken) return <LoginPage onClick={handleLogin} />;

  return (
    <SpotifyStats
      profile={profile}
      topArtists={topArtists}
      topTracks={topTracks}
      onChange={handlePeriodChange}
    />
  );
}

export default App;
