export const appScope = "user-read-private user-read-email user-top-read";
export const cookieMaxAge = 43140;
export const sessionCookie = "session";

const domain =
  import.meta.env.DOMAIN || window.location.origin || "http://localhost:8888";
export const redirectUri = `${domain}/callback`;
