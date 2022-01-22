import * as S from './styles'
import IMessages from 'types'

interface IMessagesList {
  data: IMessages[]
}
export default function MessageList({ data }: IMessagesList) {
  const renderMessageItens = () => {
    return data?.map((el) => (
      <S.MessageItem key={el.id}>
        <p>{el.text}</p>
        <S.Profile>
          <S.User>
            <img
              src={el.user.avatar_url}
              alt={`Foto do usuário ${el.user.name}`}
            />
          </S.User>

          <span>{el.user.name}</span>
        </S.Profile>
      </S.MessageItem>
    ))
  }

  return (
    <S.Wrapper>
      <img src="img/assets/logo.svg" alt="Imagem Logo 2021" />
      <S.MessageList>{renderMessageItens()}</S.MessageList>
    </S.Wrapper>
  )
}
