import { api, ApiResponse } from '../api/client'

export interface AnalyticsData {
  dataType: 'SPEED' | 'ACCIDENT_RISK' | 'TRAFFIC_DENSITY' | 'ROUTE_SAFETY' | 'FUEL_EFFICIENCY'
  value: number
  location?: string
}

export interface AnalyticsSummary {
  totalDistance: number
  timeSaved: number
  safetyScore: number
  carbonSaved: number
  tripsCompleted: number
}

export interface AnalyticsTrend {
  date: string
  value: number
}

export const analyticsService = {
  async recordAnalytics(data: AnalyticsData): Promise<ApiResponse> {
    const response = await api.post('/analytics', data)
    return response.data
  },

  async getSummary(): Promise<ApiResponse<AnalyticsSummary>> {
    const response = await api.get('/analytics/summary')
    return response.data
  },

  async getTrends(dataType: string, period: 'day' | 'week' | 'month' | 'year'): Promise<ApiResponse<AnalyticsTrend[]>> {
    const response = await api.get('/analytics/trends', {
      params: { dataType, period }
    })
    return response.data
  },

  async getAccidentHotspots(): Promise<ApiResponse> {
    const response = await api.get('/analytics/accident-hotspots')
    return response.data
  },

  async getTrafficPatterns(location?: string): Promise<ApiResponse> {
    const response = await api.get('/analytics/traffic-patterns', {
      params: { location }
    })
    return response.data
  },

  async getGovernmentReport(): Promise<ApiResponse> {
    const response = await api.get('/analytics/government-report')
    return response.data
  }
}
