import { api, ApiResponse } from '../api/client'

export interface RouteRequest {
  startLocation: string
  endLocation: string
  mode: 'DRIVE' | 'CYCLE' | 'PEDESTRIAN'
  waypoints?: string[]
  avoidTolls?: boolean
  avoidHighways?: boolean
}

export interface Route {
  id: string
  startLocation: string
  endLocation: string
  waypoints: string[]
  distance: number
  duration: number
  safetyScore: number
  congestionScore: number
  polyline: string
  createdAt: string
}

export interface RouteOptimization {
  fastest: Route
  safest: Route
  mostEfficient: Route
}

export const routeService = {
  async calculateRoute(data: RouteRequest): Promise<ApiResponse<RouteOptimization>> {
    const response = await api.post('/routes/calculate', data)
    return response.data
  },

  async saveRoute(route: Omit<Route, 'id' | 'createdAt'>): Promise<ApiResponse<Route>> {
    const response = await api.post('/routes', route)
    return response.data
  },

  async getSavedRoutes(params?: {
    limit?: number
    page?: number
  }): Promise<ApiResponse<Route[]>> {
    const response = await api.get('/routes/saved', { params })
    return response.data
  },

  async getRouteHistory(params?: {
    limit?: number
    page?: number
    startDate?: string
    endDate?: string
  }): Promise<ApiResponse<Route[]>> {
    const response = await api.get('/routes/history', { params })
    return response.data
  },

  async deleteRoute(id: string): Promise<ApiResponse> {
    const response = await api.delete(`/routes/${id}`)
    return response.data
  },

  async getTrafficUpdates(routeId: string): Promise<ApiResponse> {
    const response = await api.get(`/routes/${routeId}/traffic`)
    return response.data
  }
}
