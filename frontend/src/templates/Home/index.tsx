import { Fragment } from 'react'
import Seo from 'components/seo'
import { Container } from 'components'

export default function Home() {
  return (
    <Fragment>
      <Seo session={'Início'} />
      <Container>
        <h1>Boilerplate Nextjs</h1>
      </Container>
    </Fragment>
  )
}
