import {
  FetchUserTopItemsParams,
  SpotifyTopArtistsTracksResponse,
  UserProfile,
} from "../../types";
import { getCookie, setCookie } from "../../utils.ts";

const domain =
    import.meta.env.DOMAIN || window.location.origin || "http://localhost:8888";
export const redirectUri = `${domain}/callback`;
export const appScope = "user-read-private user-read-email user-top-read";
export const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const getProfileImage = (profile: UserProfile) => {
  if (profile.images[0]) {
    const profileImage = new Image(200, 200);
    profileImage.src = profile.images[0].url;
    return profileImage;
  }
};

// redirect to spotify auth code flow and provides auth code in URL
export async function redirectToAuthCodeFlow() {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  // generate random 16char string

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", redirectUri);
  params.append("scope", appScope);
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessTokens(authCode: string):Promise<{access_token: string, refresh_token: string}> {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", authCode);
  params.append("redirect_uri", redirectUri);
  params.append("code_verifier", verifier!);
  const authValue = btoa(clientId + ":" + clientSecret);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${authValue}`,
    },
    body: params,
  });

  const { access_token, refresh_token } = await result.json();
  return { access_token, refresh_token };
}

export async function getRefreshToken() {
  const refreshToken = getCookie("refresh");
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  });

  const { access_token, refresh_token } = await result.json();
  return { access_token, refresh_token };
}

export async function spotifyFetcher<T>(
    input: RequestInfo,
    options: RequestInit = {},
    hasRetried = false
): Promise<T> {
  const accessToken = getCookie("session");
  const refreshToken = getCookie("refresh");

  async function fetchWithToken(accessToken: string) {
    const response = await fetch(input, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return response.json();
    } else if (response.status === 401 && refreshToken && !hasRetried) {
      // Try refreshing token
      const newTokens = await getRefreshToken();
      if (newTokens) {
        setCookie("session", newTokens.access_token);
        setCookie("refresh", newTokens.refresh_token);
        return spotifyFetcher(input, options, true); // Retry original call
      }
    }

    throw new Error(`Spotify API error: ${response.status}`);
  }

  return fetchWithToken(accessToken);
}

export const fetchProfile = () => {
  return spotifyFetcher("https://api.spotify.com/v1/me", { method: "GET" });
};

export function fetchUserTopItems(
  { type, time_range = "medium_term", limit }: FetchUserTopItemsParams,
): Promise<SpotifyTopArtistsTracksResponse> {
  return spotifyFetcher(
    `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}`,
    { method: "GET" },
  );
}