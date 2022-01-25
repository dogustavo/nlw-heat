import axios from 'axios'
import api from 'services'

import IMessages from 'types'

export const getMessages = async () => {
  try {
    const response = await api.get<IMessages[]>('/messages/last3')

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    }
  }
}
