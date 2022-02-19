import { Fragment, useContext } from 'react'

import { Container, Seo, LoginBox, MessageList, MessageForm } from 'components'

import * as S from './styles'

import IMessages from 'types'
import { AuthContext } from 'contexts/auth'

export type IProps = {
  data?: IMessages[]
  error?: boolean
}

export default function Home({ data, error }: IProps) {
  const { user } = useContext(AuthContext)

  return (
    <Fragment>
      <Seo session={'Início'} />
      <Container>
        <S.ContentWrapper isAuth={!!user}>
          <MessageList data={data} error={error} />
          {!!user ? <MessageForm /> : <LoginBox />}
        </S.ContentWrapper>
      </Container>
    </Fragment>
  )
}
