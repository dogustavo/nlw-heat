import axios from 'axios'

export * from './messages'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export default api
