import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  
  export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
      content_type: "projects" 
    })
  
    const paths = res.items.map(item => {
      return {
        params: { slug: item.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
      content_type: 'projects',
      'fields.slug': params.slug
    })
  
    return {
      props: { projects: items[0] }
    }
  
  }

const ProjectDetails = ({projects}) => {
    console.log(projects)

    const { title } = projects.fields
    
    return ( 
        <div className="text-white">{ title }</div>
     );
}
 
export default ProjectDetails;