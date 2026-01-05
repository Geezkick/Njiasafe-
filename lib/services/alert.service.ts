import { api, ApiResponse } from '../api/client'

export interface CreateAlertData {
  type: 'SOS' | 'ACCIDENT' | 'TRAFFIC_JAM' | 'ROAD_CLOSURE' | 'SPEEDING' | 'V2V_ALERT'
  location: string
  coordinates: string
  description?: string
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
}

export interface Alert {
  id: string
  userId: string
  type: string
  location: string
  coordinates: string
  description?: string
  status: string
  priority: string
  createdAt: string
  updatedAt: string
}

export const alertService = {
  async createAlert(data: CreateAlertData): Promise<ApiResponse<Alert>> {
    const response = await api.post('/alerts', data)
    return response.data
  },

  async getAlerts(params?: {
    type?: string
    status?: string
    limit?: number
    page?: number
  }): Promise<ApiResponse<Alert[]>> {
    const response = await api.get('/alerts', { params })
    return response.data
  },

  async getAlert(id: string): Promise<ApiResponse<Alert>> {
    const response = await api.get(`/alerts/${id}`)
    return response.data
  },

  async updateAlert(id: string, data: Partial<CreateAlertData>): Promise<ApiResponse<Alert>> {
    const response = await api.patch(`/alerts/${id}`, data)
    return response.data
  },

  async deleteAlert(id: string): Promise<ApiResponse> {
    const response = await api.delete(`/alerts/${id}`)
    return response.data
  },

  async getNearbyAlerts(lat: number, lng: number, radius: number = 5000): Promise<ApiResponse<Alert[]>> {
    const response = await api.get('/alerts/nearby', {
      params: { lat, lng, radius }
    })
    return response.data
  }
}
