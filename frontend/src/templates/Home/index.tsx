import { Fragment } from 'react'

import { Container, Seo, LoginBox, MessageList } from 'components'

import * as S from './styles'

import IMessages from 'types'

export type IProps = {
  data: IMessages[]
}

export default function Home({ data }: IProps) {
  return (
    <Fragment>
      <Seo session={'Início'} />
      <Container>
        <S.ContentWrapper>
          <MessageList data={data} />
          <LoginBox />
        </S.ContentWrapper>
      </Container>
    </Fragment>
  )
}
