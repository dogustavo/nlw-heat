import io from 'socket.io-client'

import * as S from './styles'
import IMessages from 'types'
import { useEffect, useState } from 'react'

interface IMessagesList {
  data?: IMessages[]
  error?: boolean
}

const messagesQueue: IMessages[] = []
const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: IMessages) => {
  messagesQueue.push(newMessage)
})

export default function MessageList({ data, error }: IMessagesList) {
  const [messages, setMessages] = useState<IMessages[] | undefined>(data)

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prev) =>
          [messagesQueue[0], prev[0], prev[1]].filter(Boolean)
        )

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  const renderMessageItens = () => {
    return messages?.map((el, id) => (
      <S.MessageItem key={id}>
        <p>{el?.text}</p>
        <S.Profile>
          <S.User>
            <img
              src={el?.user.avatar_url}
              alt={`Foto do usuário ${el?.user.name}`}
            />
          </S.User>

          <span>{el?.user.name}</span>
        </S.Profile>
      </S.MessageItem>
    ))
  }

  return (
    <S.Wrapper>
      <img src="img/assets/logo.svg" alt="Imagem Logo 2021" />
      {!error ? (
        <S.MessageList>{renderMessageItens()}</S.MessageList>
      ) : (
        <S.MessageList>
          <S.Error>
            Não foi possível renderizar as menssagens no momento.
          </S.Error>
        </S.MessageList>
      )}
    </S.Wrapper>
  )
}
