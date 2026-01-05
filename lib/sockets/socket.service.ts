import { io, Socket } from 'socket.io-client'

class SocketService {
  private socket: Socket | null = null
  private listeners: Map<string, Function[]> = new Map()

  connect(token: string) {
    if (this.socket?.connected) return

    this.socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001', {
      auth: { token },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    this.setupEventListeners()
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
      this.listeners.clear()
    }
  }

  private setupEventListeners() {
    if (!this.socket) return

    this.socket.on('connect', () => {
      console.log('Socket connected')
      this.emitEvent('connect', null)
    })

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected')
      this.emitEvent('disconnect', null)
    })

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
      this.emitEvent('connect_error', error)
    })

    // V2V Events
    this.socket.on('v2v-message', (data) => {
      this.emitEvent('v2v-message', data)
    })

    this.socket.on('v2v-broadcast', (data) => {
      this.emitEvent('v2v-broadcast', data)
    })

    // Alert Events
    this.socket.on('sos-alert', (data) => {
      this.emitEvent('sos-alert', data)
    })

    this.socket.on('alert-broadcast', (data) => {
      this.emitEvent('alert-broadcast', data)
    })

    // Traffic Events
    this.socket.on('traffic-update', (data) => {
      this.emitEvent('traffic-update', data)
    })

    this.socket.on('route-update', (data) => {
      this.emitEvent('route-update', data)
    })

    // Community Events
    this.socket.on('community-alert', (data) => {
      this.emitEvent('community-alert', data)
    })

    this.socket.on('user-connected', (data) => {
      this.emitEvent('user-connected', data)
    })

    this.socket.on('user-disconnected', (data) => {
      this.emitEvent('user-disconnected', data)
    })
  }

  // Emit methods
  emitV2VMessage(data: any) {
    this.socket?.emit('v2v-message', data)
  }

  emitSOSAlert(data: any) {
    this.socket?.emit('sos-alert', data)
  }

  emitLocationUpdate(data: any) {
    this.socket?.emit('location-update', data)
  }

  emitTrafficUpdate(data: any) {
    this.socket?.emit('traffic-update', data)
  }

  emitCommunityAlert(data: any) {
    this.socket?.emit('community-alert', data)
  }

  // Listener methods
  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, [])
    }
    this.listeners.get(event)?.push(callback)
  }

  off(event: string, callback: Function) {
    const listeners = this.listeners.get(event)
    if (listeners) {
      const index = listeners.indexOf(callback)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }

  private emitEvent(event: string, data: any) {
    const listeners = this.listeners.get(event)
    if (listeners) {
      listeners.forEach(callback => callback(data))
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false
  }
}

export const socketService = new SocketService()
