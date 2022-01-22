import * as S from './styles'
import { VscGithub } from 'react-icons/vsc'

export default function LoginBox() {
  return (
    <S.Wrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <S.Signin href="#">
        <VscGithub size="24" /> Entrar com github
      </S.Signin>
    </S.Wrapper>
  )
}
