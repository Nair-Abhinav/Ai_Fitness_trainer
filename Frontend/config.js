// Prefer env var, fall back to 127.0.0.1 for reliability on Windows
const BACKEND_DEFAULT = "http://127.0.0.1:8080";

const config = {
  backendUrl:
    // Next.js exposes env vars prefixed with NEXT_PUBLIC_ to the browser
    (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_BACKEND_URL) || BACKEND_DEFAULT,
};

export default config;