import Head from 'next/head'
import NavHero from '../components/navHero.js'
import FeaturedServices from '../components/featuredServices.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Altitude Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHero />
      <FeaturedServices />

    </div>
  )
}
