import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "@/components/Pages/Login";
import SpotifyStatsPage from "@/components/Pages/SpotifyStatsPage";
import EULA from "components/Pages/Legal/EULA";
import PrivacyPolicy from "components/Pages/Legal/PrivacyPolicy";
import PageNotFoundPage from "components/Pages/PageNotFoundPage";

import {
  redirectToAuthCodeFlow,
} from "@/apis/spotify";
import { AuthProvider } from "@/auth";
import AuthCallback from "@/AuthCallback";

function App() {
    const handleLogin = async () => {
    await redirectToAuthCodeFlow();
  };

  return (
      <AuthProvider>
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
              <Route path="/callback" element={<AuthCallback />} /> {/* here after spotify authorize complete */}
              <Route path="legal">
                <Route path="eula" element={<EULA />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
              </Route>
              <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
    </AuthProvider>
  );
}

export default App;
