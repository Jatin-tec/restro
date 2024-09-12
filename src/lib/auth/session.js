"use server";
import { encrypt, decrypt } from "@/lib/auth/util/lib";
import { cookies } from "next/headers";
import { apiPost } from "@/handlers/apiHandler";

export async function login(prevState, formData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await apiPost("/api/auth/login/", user, {
    headers: {
      cache: "no-store",
    },
  });

  if (response) {
    const cookieStore = cookies();
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
    const session = await encrypt(response);
    cookieStore.set({
      name: "session",
      value: session,
      httpOnly: true,
      expires,
    });
    return { message: "Login successful", status: "success" };
  }
  return { message: "Error logging in", status: "destructive" };
}

export async function getSession() {
  const cookieStore = cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.set({
    name: "session",
    value: "",
    maxAge: 0,
  });
}
