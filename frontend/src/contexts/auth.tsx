import { ReactNode, createContext, useEffect, useState } from 'react'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

import api, { signIn, getProfile } from 'services'

interface User {
  id: string
  name: string
  github_id: number
  avatar_url: string
  login?: string
}

interface IAuthContext {
  signInUrl: string
  user: User | null
  githubSignOut: () => void
}

interface IAuthProvider {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`

  const githubSignIn = async (githubCode: string) => {
    try {
      const data = await signIn(githubCode)

      if (data) {
        const { token, user } = data

        setCookie(null, 'userToken', token, {
          maxAge: 60 * 60 * 24 * 31,
          path: '/'
        })
        setUser(user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const githubSignOut = async () => {
    destroyCookie(null, 'userToken')
    setUser(null)
  }

  useEffect(() => {
    const { userToken } = parseCookies()

    if (userToken) {
      api.defaults.headers.common.authorization = `Bearer ${userToken}`

      getProfile().then((data) => {
        if (data) {
          setUser(data)
        }
      })
    }
  }, [])

  useEffect(() => {
    const url = new URLSearchParams(window.location.search)
    const githubCode = url.get('code')

    if (githubCode) {
      githubSignIn(githubCode)
      window.history.pushState({}, '', process.env.NEXT_PUBLIC_URL)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user, githubSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}
