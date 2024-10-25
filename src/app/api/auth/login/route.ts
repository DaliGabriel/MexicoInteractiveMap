// app/api/auth/login/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { password, username } = data;

    
    // Hardcoded credentials (replace with process.env for production)
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Validate required fields
    if (!password || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
      // Set an auth cookie to track the session
      const response = NextResponse.json({ success: true });
      response.cookies.set("authCookie", "authenticated", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day (adjust as needed)
      });
      return response;
    }

    // Incorrect credentials
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Error logging in the user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
