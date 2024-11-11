import api from "../utils/axiosInstance";
import { handleApiError } from "../utils/errorHandler";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
