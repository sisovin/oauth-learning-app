import axios from 'axios';
import { AuthResponse } from 'packages/shared/api-types';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await apiClient.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default apiClient;
