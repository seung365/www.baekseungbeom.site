// app/admin/login/action.js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sign, verify } from "jsonwebtoken";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = sign({ username, admin: true }, jwtSecret, { expiresIn: "1d" });

    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    redirect("/admin");
  }

  return { error: "인증 실패. 자격 증명을 확인하세요." };
}

// 인증 상태 확인 액션
export async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    return { isAuthenticated: false };
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  try {
    const decoded = verify(token, jwtSecret);

    if (typeof decoded === "string") {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      user: { username: decoded.username },
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return { isAuthenticated: false };
  }
}

// 로그아웃 액션
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "auth",
    value: "",
    expires: new Date(0),
  });

  redirect("/admin/login");
}
