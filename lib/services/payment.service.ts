import { api, ApiResponse } from '../api/client'

export interface MpesaPaymentRequest {
  phone: string
  amount: number
  subscription: 'FREE' | 'PREMIUM'
}

export interface CardPaymentRequest {
  cardNumber: string
  expiryMonth: string
  expiryYear: string
  cvv: string
  amount: number
  subscription: 'FREE' | 'PREMIUM'
}

export interface Payment {
  id: string
  amount: number
  currency: string
  method: 'MPESA' | 'CARD' | 'BANK_TRANSFER'
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'
  subscription: 'FREE' | 'PREMIUM'
  transactionId: string
  createdAt: string
}

export const paymentService = {
  async initiateMpesaPayment(data: MpesaPaymentRequest): Promise<ApiResponse<Payment>> {
    const response = await api.post('/payments/mpesa', data)
    return response.data
  },

  async processCardPayment(data: CardPaymentRequest): Promise<ApiResponse<Payment>> {
    const response = await api.post('/payments/card', data)
    return response.data
  },

  async verifyPayment(transactionId: string): Promise<ApiResponse<Payment>> {
    const response = await api.get(`/payments/verify/${transactionId}`)
    return response.data
  },

  async getPaymentHistory(params?: {
    limit?: number
    page?: number
    method?: string
  }): Promise<ApiResponse<Payment[]>> {
    const response = await api.get('/payments/history', { params })
    return response.data
  },

  async cancelSubscription(): Promise<ApiResponse> {
    const response = await api.post('/payments/cancel-subscription')
    return response.data
  }
}
