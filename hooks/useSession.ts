'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  email: string
  sub: string
  exp: number
  iat: number
  // tambahkan field lain sesuai payload token kamu
}

interface Session {
  user: DecodedToken | null
  isAuthenticated: boolean
}

export function useSession(): Session {
  const [user, setUser] = useState<DecodedToken | null>(null)

  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      setUser(null)
      return
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token)

      // Cek apakah token expired
      const now = Date.now() / 1000
      if (decoded.exp < now) {
        Cookies.remove('token')
        setUser(null)
      } else {
        setUser(decoded)
      }
    } catch (err) {
      console.error('Token invalid', err)
      setUser(null)
    }
  }, [])

  return {
    user,
    isAuthenticated: !!user,
  }
}
