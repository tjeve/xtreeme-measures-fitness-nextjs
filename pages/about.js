import Link from 'next/link'
import Head from 'next/head'
import Navb from '../components/Nav.js'
import Layout from '../components/layout'

export default function aboutUs() {
    return (
        <Layout>
          <Head>
              <title>About Us</title>
              <link rel="icon" href="/faviconLogo.ico"/>
          </Head>
          <Navb/>
            <h1>About Us</h1>
            <h2>
                <Link href='/'>
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}