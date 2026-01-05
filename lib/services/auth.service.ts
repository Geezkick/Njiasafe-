import { api, ApiResponse } from '../api/client'

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData extends LoginData {
  name: string
  phone?: string
}

export interface AuthResponse {
  user: any
  token: string
}

export const authService = {
  async login(data: LoginData): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post('/auth/login', data)
    return response.data
  },

  async register(data: RegisterData): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post('/auth/register', data)
    return response.data
  },

  async forgotPassword(email: string): Promise<ApiResponse> {
    const response = await api.post('/auth/forgot-password', { email })
    return response.data
  },

  async resetPassword(token: string, password: string): Promise<ApiResponse> {
    const response = await api.post('/auth/reset-password', { token, password })
    return response.data
  },

  async verifyEmail(token: string): Promise<ApiResponse> {
    const response = await api.post('/auth/verify-email', { token })
    return response.data
  }
}
