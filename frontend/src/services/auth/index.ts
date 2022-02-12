import axios from 'axios'
import api from 'services'

type IRequest = {
  token: string
  user: {
    id: string
    name: string
    github_id: number
    avatar_url: string
    login?: string
  }
}

export const signIn = async (code: string) => {
  try {
    const { data } = await api.post<IRequest>('authenticate', { code })

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    }
  }
}
