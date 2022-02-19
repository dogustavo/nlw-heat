import { useContext } from 'react'

import * as S from './styles'
import { AuthContext } from 'contexts/auth'
import { VscGithub } from 'react-icons/vsc'

export default function LoginBox() {
  const { user, signInUrl } = useContext(AuthContext)


  return (
    <S.Wrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <S.Signin href={signInUrl}>
        <VscGithub size="24" /> Entrar com github
      </S.Signin>
    </S.Wrapper>
  )
}
