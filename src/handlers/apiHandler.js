import { getSession, logout } from "@/auth/lib";
import { redirect } from "next/dist/server/api-utils";

// apiHandler.js
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

// Default headers for all requests
const defaultHeaders = {
  "Content-Type": "application/json",
};

// Helper to get tokens from cookies (server-side) or localStorage (client-side)
const getAccessToken = async () => {
  const session = await getSession();
  return session?.tokens?.access;
};

const apiRequest = async (endpoint, options = {}) => {
  let headers = {
    ...defaultHeaders,
    ...options.headers,
  };
  const accessToken = await getAccessToken();
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
    cache: "no-store",  
  });
  return [await response.json(), response.status];
};

// Exports for easy access
export const apiGet = (endpoint, options = {}) =>
  apiRequest(endpoint, { method: "GET", ...options });

export const apiPost = (endpoint, body, options = {}) =>
  apiRequest(
    endpoint,
    { method: "POST", body: JSON.stringify(body), ...options },
  );

export const apiPut = (endpoint, body, options = {}) =>
  apiRequest(
    endpoint,
    { method: "PUT", body: JSON.stringify(body), ...options },
  );

export const apiDelete = (endpoint, options = {}) =>
  apiRequest(endpoint, { method: "DELETE", ...options });
