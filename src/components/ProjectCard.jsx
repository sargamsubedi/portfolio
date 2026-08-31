
function ProjectCard({ project ,index}) {
    const { name, description, img, livedemo, github, tech } = project;
    return (
        <div className="border text-xl flex justify-around bg-ternaryColor py-10 px-5 rounded-xl w-full sticky" style={{ top: `${index * 48}px` }}>
            {/* for content */}
            <div className="flex-1 flex flex-col justify-around items-start space-y-10 px-10">
                <p className="text-4xl uppercase underline underline-offset-10 font-semibold leading-15">{name} </p>
                <p>{description} </p>

                <div className="flex gap-3 justify-evenly min-w-1/2 ">
                    <a href={livedemo} target="_blank" rel="noopener noreferrer" className="text-center border px-4  py-2 rounded-3xl hover:scale-[1.05] transition">Live Demo</a>
                    <a href={github} target="_blank" className="text-center border px-4 py-2 rounded-3xl hover:scale-[1.05] transition">Github</a>
                </div>
            </div>
            {/* for image */}
            <div className="flex-1  flex justify-center ">

                <img src={img} width="1280px" height="797px" alt="project Image" className=' w-[90%]   aspect-square rounded-lg object-center' />


            </div>
        </div>
    )
}
export default ProjectCard;