import axios from "axios";
import Cookies from "js-cookie";

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  roleId: string;
}

// types/user/update-user.dto.ts
export interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  roleId?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_SITE_URL

// Ambil token dari cookie
function getAuthHeader() {
  const token = Cookies.get("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

// GET /users
export async function getUsers() {
  const response = await axios.get(`${API_URL}/users`, getAuthHeader());
  return response.data;
}

// GET /users/:id
export async function getUserById(id: string) {
  const response = await axios.get(`${API_URL}/users/${id}`, getAuthHeader());
  return response.data;
}

// POST /users
export async function createUser(payload: CreateUserDto) {
  const response = await axios.post(`${API_URL}/users`, payload, getAuthHeader());
  return response.data;
}

// PUT /users/:id
export async function updateUser(id: string, payload: UpdateUserDto) {
  const response = await axios.put(
    `${API_URL}/users/${id}`,
    payload,
    getAuthHeader()
  );
  return response.data;
}

// DELETE /users/:id
export async function deleteUser(id: string) {
  const response = await axios.delete(`${API_URL}/users/${id}`, getAuthHeader());
  return response.data;
}
