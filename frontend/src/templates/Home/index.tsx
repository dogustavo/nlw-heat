import { Fragment } from 'react'

import { Container, Seo, LoginBox, MessageList } from 'components'

import * as S from './styles'

import IMessages from 'types'

export type IProps = {
  data?: IMessages[]
  error?: boolean
}

export default function Home({ data, error }: IProps) {
  return (
    <Fragment>
      <Seo session={'Início'} />
      <Container>
        <S.ContentWrapper>
          <MessageList data={data} error={error} />
          <LoginBox />
        </S.ContentWrapper>
      </Container>
    </Fragment>
  )
}
