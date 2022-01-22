export default interface IMessages {
  id: string
  text: string
  user: IUser
}

interface IUser {
  id: string
  name: string
  avatar_url: string
}
