import api from 'services'

import IMessages from 'types'

export const getMessages = async () => {
  try {
    const response = await api.get<IMessages[]>('/messages/last3')

    return response.data
  } catch (error) {
    return error
  }
}
