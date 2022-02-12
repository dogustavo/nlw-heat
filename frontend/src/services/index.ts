import axios from 'axios'

export * from './messages'
export * from './auth'
export * from './user'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export default api
