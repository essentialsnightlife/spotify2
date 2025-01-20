import { useCallback, useEffect, useState } from "react";
import { fetchProfile, fetchUserTopItems } from "@/apis/spotify";
import { SpotifyStats } from "@/components/Pages/SpotifyStatsPage/SpotifyStats";
import {
  FetchUserTopItemsParams,
  SpotifyItem,
  UserProfile,
} from "@/types";
import { getCookie } from "@/helpers";
import { sessionCookie } from "@/constants";

function SpotifyStatsPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [topArtists, setTopArtists] = useState<SpotifyItem[] | null>(null);
  const [topTracks, setTopTracks] = useState<SpotifyItem[] | null>(null);
  const [loading, setLoading] = useState(false);

  const accessToken = getCookie(sessionCookie);

  const fetchProfileData = useCallback(async () => {
    if (!accessToken) return;

    try {
      setLoading(true);
      const [userProfile, artistResponse, trackResponse] = await Promise.all([
        fetchProfile(accessToken),
        fetchUserTopItems(
          { type: "artists", time_range: "medium_term", limit: 10 },
          accessToken
        ),
        fetchUserTopItems(
          { type: "tracks", time_range: "medium_term", limit: 10 },
          accessToken
        ),
      ]);

      setProfile(userProfile);
      setTopArtists(artistResponse.items);
      setTopTracks(trackResponse.items);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      alert(
        "Error fetching your data, please try and login again or email the admin."
      );
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  const handlePeriodChange = async (
    timeRange: FetchUserTopItemsParams["time_range"],
    type: "artists" | "tracks"
  ) => {
    try {
      const response = await fetchUserTopItems(
        { type, time_range: timeRange, limit: 10 },
        accessToken
      );
      if (type === "artists") {
        setTopArtists(response.items);
      } else {
        setTopTracks(response.items);
      }
    } catch (error) {
      console.error("Error updating stats:", error);
      alert("Error updating your stats, please try and login again or email the admin.");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  if (loading) return <>Fetching your Spotify Stats...</>;

  return (
    <SpotifyStats
      profile={profile}
      topArtists={topArtists}
      topTracks={topTracks}
      onChange={handlePeriodChange}
      loading={loading}
    />
  );
}

export default SpotifyStatsPage;
