// src/api/authApi.ts

import api from "./../utils/axiosInstance";

interface RegisterUser {
  email: string;
  password: string;
}

interface RegisterResponse {
  id: string;
  username: string;
  email: string;
}

export const registerUser = async (
  userData: RegisterUser
): Promise<RegisterResponse> => {
  try {
    const response = await api.post<RegisterResponse>("/api/users", userData);
    console.log("************RESPONSE", response.data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

interface LoginUser {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

export const loginUser = async (
  userData: LoginUser
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/api/login", userData);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
