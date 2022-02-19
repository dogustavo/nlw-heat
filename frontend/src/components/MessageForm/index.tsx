import { useContext, useState, FormEvent } from 'react'
import { AuthContext } from 'contexts/auth'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import * as S from './styles'

import { sendMessages } from 'services'

export default function MessageForm() {
  const { user, githubSignOut } = useContext(AuthContext)

  const [message, setMessage] = useState('')

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault()

    if (!message.trim()) {
      return
    }

    try {
      await sendMessages(message)
      setMessage('')
    } catch (error) {
      throw new Error('Algo de errado, tente novamente dentro de instantes!')
    }
  }

  return (
    <S.FormWrapper>
      <S.SignOut onClick={githubSignOut}>
        <VscSignOut size="32" />
      </S.SignOut>

      <S.Header>
        <S.UserImage>
          <img
            src={user?.avatar_url}
            alt="Avatar do usuário Logado"
            srcSet=""
          />
        </S.UserImage>
        <S.UserName>{user?.name}</S.UserName>
        <S.UserGitHub>
          <VscGithubInverted size="16" />
          {user?.login}
        </S.UserGitHub>
      </S.Header>

      <S.Form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>

        <textarea
          name="message"
          id="message"
          onChange={(evt) => setMessage(evt.target.value)}
          placeholder="Diga algo aí?"
          value={message}
        />

        <button>Enviar</button>
      </S.Form>
    </S.FormWrapper>
  )
}
