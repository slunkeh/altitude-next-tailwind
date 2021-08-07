import Head from 'next/head'
import Navbar from '../components/navbar.js';
import Hero from '../components/hero.js';
import FeaturedServices from '../components/featuredServices.js'
import ProjectCard from '../components/projectCard.js';
import Footer from '../components/footer.js';
import styles from '../custom.module.css'
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })


  const res = await client.getEntries({ content_type: "projects" })


  return {
    props: {
      projects: res.items,
    }
  }
}

export default function Home({ projects }) {
  console.log(projects)

  return (
    // example of using custom styles <div className={styles.classy}></div>
    <div className={styles.classy}>
      <Head>
        <title>Altitude Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <div className="container py-36 mx-auto">
        <div className="lg:text-left">
          <h2 className="text-base text-lilac font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-white text-3xl leading-8 font-semibold tracking-tigh sm:text-4xl">
            Recent Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400">
            I have worked on varied projects spanning web development to online marketing with some amazing clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 text-white">
          {projects.map(project => (
            <ProjectCard key={project.sys.id} project={project} />
          ))}
        </div>
      </div>
      <div className="container pb-18 mx-auto">
        <div className="lg:text-left">
          <span className="text-base text-lilac font-semibold tracking-wide uppercase">Why work with me?</span>
          <h1 className="max-w-lg text-2xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl mb-8 mt-4">
            I focus on what matters.<span className="block text-lilac xl:inline"> Revenue</span>.
          </h1>
        </div>
        <div className="text-white max-w-4xl">
        <p className="py-4">Unlike any other web designer or developer my goal is to help your business generate revenue and build trust with your clients or customers. I combine well thought out design with laser targeted marketing campaigns. Together this will set you apart from the competition.</p>
        <p className="py-4">I have experience working with small local business all the way to large corporations such as Lloyds Bank and the NHS. My clients are typically highly motivated, committed individuals that run established businesses. They all have one thing in common. They consider both their website and marketing efforts as an essential investment .</p>
        <p className="py-4">If this sounds like you, I would be delighted to talk with you and find out more about your business. It's important to know that I can't work with everyone who get's in touch. I will only commit to working with businesses where I feel I can add value and actually get you results.</p>
        <p className="py-4">Below is typically the CMS platforms I tend to work with in order of preference.</p> 
        </div>
      </div>
      <Footer />
    </div>
  )
}
