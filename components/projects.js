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

const Projects = ({projects}) => {
    console.log(projects)
    return ( 
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
        </div>
     );
}
 
export default Projects;