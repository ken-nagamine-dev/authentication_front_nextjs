import Head from 'next/head'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'

export default function Dashboard() {

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <h1>DASHBOARD</h1>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}