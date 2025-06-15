import axios from "axios";
import Cookies from "js-cookie";

interface LoginPayload {
  email: string;
  password: string;
}

// interface LoginResponse {
//   accessToken: string;
//   refresh_token?: string;
// }

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_SITE_URL


export async function login(payload: LoginPayload) {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.accessToken.access_token;
    const name = response.data.user

    Cookies.set("token", token, {
      path: "/",
      sameSite: "strict",
      secure: false, // true jika https
      expires: 1, // 1 day
    });
    
    // document.cookie = `token=${response.data.accessToken}; path=/; max-age=3600;`;

    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login gagal" };
  }
}

export function logout() {
  Cookies.remove("token", { path: "/" });
  window.location.href = "/auth/login";
}
