import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {

    const { image, title, outcomes, slug, comingSoon } = project.fields

    return (
        <div>
            <Image
                className="rounded-lg rounded-b-none mb-0"
                src={`https://${image.fields.file.url}`}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                alt={`Project image for ${title}`}
            />
            <div className="bg-dark-900 p-4 rounded-lg rounded-t-none">
                <h3 className="text-2xl">{title}</h3>
                <div className="flex py-4">
                    {project.fields && outcomes && outcomes.map(outcome => (
                        <div key={outcome} className="text-xs leading-none even:border-l-2 even:border-r-2 even:px-2 odd:px-2 text-gray-400 font-semibold">{outcome}</div>
                    ))}
                </div>
                {comingSoon ? <p className="text-sm font-semibold text-gray-400">Write up coming soon</p> : <Link href={`/projects/${slug}`}><a className="text-sm font-semibold text-primary">Read write up</a></Link>}
            </div>
        </div>
    );
}

export default ProjectCard;