import Head from 'next/head'
import NavHero from '../components/navHero.js'
import Hero from '../components/hero.js'

export default function About() {
  return (
    <div>
      <Head>
        <title>Altitude Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHero />
      <Hero
        preHeading = "Altitude Design"
        heading = "About me" 
        />
    </div>
  )
}
