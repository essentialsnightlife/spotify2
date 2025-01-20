import {
  FetchUserTopItemsParams,
  SpotifyTopArtistsTracksResponse,
  UserProfile,
} from "../../types";
import { appScope, redirectUri, sessionCookie } from "../../../src/constants";
import { getCookie } from "../../helpers";

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

export async function getAccessToken(authCode: string) {
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

  const { access_token } = await result.json();
  return access_token;
}

export async function fetchProfile(): Promise<UserProfile> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${getCookie(sessionCookie)}` },
  });

  if (!result.ok) {
    if (result.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to fetch user top items");
  }

  return result.json();
}

export async function fetchUserTopItems(
  { type, time_range = "medium_term", limit }: FetchUserTopItemsParams,
  accessToken: string | null
): Promise<SpotifyTopArtistsTracksResponse> {
  const queryParams = new URLSearchParams({
    time_range,
    ...(limit && { limit: limit.toString() }),
  }).toString();

  const result = await fetch(
    `https://api.spotify.com/v1/me/top/${type}?${queryParams}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken || getCookie(sessionCookie)}`,
      },
    }
  );

  if (!result.ok) {
    if (result.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error("Failed to fetch user top items");
  }

  return result.json();
}
