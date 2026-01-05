'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import Cookies from 'js-cookie'

interface User {
  id: string
  email: string
  name: string
  role: string
  subscription: string
  profilePicture?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (data: SignupData) => Promise<void>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

interface SignupData {
  email: string
  password: string
  name: string
  phone?: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('njiasafe-user')
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        // Also set cookie for middleware
        Cookies.set('token', parsedUser.id, { expires: 7 })
      } catch (error) {
        localStorage.removeItem('njiasafe-user')
        Cookies.remove('token')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        role: 'user',
        subscription: 'premium',
        profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email
      }
      
      setUser(mockUser)
      localStorage.setItem('njiasafe-user', JSON.stringify(mockUser))
      // Set cookie for middleware
      Cookies.set('token', mockUser.id, { expires: 7 })
    } catch (error) {
      throw new Error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (data: SignupData) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email: data.email,
        name: data.name,
        role: 'user',
        subscription: 'free',
        profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + data.email
      }
      
      setUser(mockUser)
      localStorage.setItem('njiasafe-user', JSON.stringify(mockUser))
      // Set cookie for middleware
      Cookies.set('token', mockUser.id, { expires: 7 })
    } catch (error) {
      throw new Error('Signup failed')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('njiasafe-user')
    // Remove cookie
    Cookies.remove('token')
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('njiasafe-user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
