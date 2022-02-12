import axios from 'axios'
import api from 'services'

type IRequest = {
  id: string
  name: string
  github_id: number
  avatar_url: string
  login?: string
}

export const getProfile = async () => {
  try {
    const { data } = await api.get<IRequest>('profile')

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    }
  }
}
