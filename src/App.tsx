import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "@/components/Pages/Login";
import SpotifyStatsPage from "@/components/Pages/SpotifyStatsPage";
import EULA from "components/Pages/Legal/EULA";
import PrivacyPolicy from "components/Pages/Legal/PrivacyPolicy";

import { useCallback, useEffect, useState } from "react";
import { getCookie } from "@/helpers";
import { cookieMaxAge, sessionCookie } from "@/constants";
import {
  getAccessToken,
  redirectToAuthCodeFlow,
} from "@/apis/spotify";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    getCookie(sessionCookie)
  );

  const navigate = useNavigate();
  const authCode = new URLSearchParams(window.location.search).get("code");

  const fetchAccessToken = useCallback(async () => {
    if (!authCode || accessToken) return;

    try {
      const token = await getAccessToken(authCode);
      if (token) {
        document.cookie = `${sessionCookie}=${token}; max-age=${cookieMaxAge}; Secure;`;
        setAccessToken(token);
        navigate("/"); //i.e. spotifyStats
      }
    } catch (error) {
      alert("Failed to authenticate. Please try again or contact admin.");
      console.error("Error fetching access token:", error);
    }
  }, [authCode, accessToken, navigate]);

  const handleLogin = async () => {
    await redirectToAuthCodeFlow();
  };

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SpotifyStatsPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login onClick={handleLogin} />} />
      <Route path="legal">
        <Route path="eula" element={<EULA />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Route>
      <Route path="*" element={<>404 - Page Not Found</>} />
    </Routes>
  );
}

export default App;
