import { Home as HomePage } from 'templates'

import { GetServerSideProps } from 'next'
import { getMessages } from 'services'

import IMessages from 'types'

interface IProps {
  data: IMessages[]
}

export default function Home({ data }: IProps) {
  return <HomePage data={data} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getMessages()

  return {
    props: {
      data: response
    }
  }
}
