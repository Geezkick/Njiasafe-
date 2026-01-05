export interface User {
  id: string
  email: string
  name: string
  role: string
  subscription: 'FREE' | 'PREMIUM'
  profilePicture?: string
  phone?: string
  mode: 'DRIVE' | 'CYCLE' | 'PEDESTRIAN'
  language: 'ENGLISH' | 'SWAHILI'
  isVerified: boolean
  createdAt: Date
}

export interface Alert {
  id: string
  type: 'SOS' | 'ACCIDENT' | 'TRAFFIC_JAM' | 'ROAD_CLOSURE' | 'SPEEDING' | 'V2V_ALERT'
  location: string
  coordinates: string
  description?: string
  status: 'ACTIVE' | 'RESOLVED' | 'CANCELLED'
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  createdAt: Date
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
  createdAt: Date
}

export interface Analytics {
  dataType: 'SPEED' | 'ACCIDENT_RISK' | 'TRAFFIC_DENSITY' | 'ROUTE_SAFETY' | 'FUEL_EFFICIENCY'
  value: number
  location?: string
  timestamp: Date
}

export interface Payment {
  amount: number
  currency: string
  method: 'MPESA' | 'CARD' | 'BANK_TRANSFER'
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'
  subscription: 'FREE' | 'PREMIUM'
  createdAt: Date
}

export interface CommunityPost {
  type: 'ALERT' | 'TIP' | 'QUESTION' | 'EXPERIENCE' | 'REVIEW'
  content: string
  location?: string
  upvotes: number
  downvotes: number
  createdAt: Date
}
