import Link from 'next/link'
import Head from 'next/head'
import Navb from '../components/Nav.js'
import Layout from '../components/layout'

export default function bootCamp() {
    return (
        <Layout>
          <Head>
              <title>Bootcamp</title>
              <link rel="icon" href="/faviconLogo.ico"/>
          </Head>
          <Navb/>
            <h1>Boot Camp</h1>
            <h2>
                <Link href='/'>
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}