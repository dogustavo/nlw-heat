import { Home as HomePage } from 'templates'

import { GetServerSideProps } from 'next'
import { getMessages } from 'services'

import IMessages from 'types'

interface IProps {
  data: IMessages[]
  error: boolean
}

export default function Home({ data, error }: IProps) {
  return <HomePage data={data} error={error} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getMessages()

    return {
      props: {
        data: response,
        error: false
      }
    }
  } catch (error) {
    return {
      props: {
        error: true
      }
    }
  }
}
