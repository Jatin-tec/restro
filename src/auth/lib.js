'use server';
import { encrypt, decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function login(formData, next = null) {
    const user = {
        email: formData.get("email"),
        password: formData.get("password"),
    }
    const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!response.status === 200) {
        throw new Error("Login failed");
    }
    const data = await response.json();
    const cookieStore = cookies()
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
    const session = await encrypt(data);
    cookieStore.set({
        name: 'session',
        value: session,
        expires,
    })
    if (next) {
        return redirect(next);
    }
    return redirect('/');
}

export async function getSession() {
    const cookieStore = cookies()
    const session = cookieStore.get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function logout() {
    const cookieStore = cookies()
    cookieStore.set({
        name: 'session',
        value: '',
        maxAge: 0,
    })
    return redirect('/login');
}