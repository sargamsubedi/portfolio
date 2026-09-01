
function ProjectCard({ project ,index}) {
    const { name, description, img, liveDemo, github, tech } = project;
    return (
        <div className="text-xl flex flex-col-reverse md:flex-row gap-10 justify-around bg-projectCard py-10 px-5 rounded-xl w-full sticky  hover:border-2 border-ternaryColor" style={{ top: `${index * 48}px` }}>
            {/* for content */}
            <div className="flex-1 flex flex-col justify-around items-start space-y-10 px-10">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-10 md:leading-13  uppercase underline underline-offset-10 font-semibold ">{name} </p>
                <p>{description} </p>

                <div className="flex gap-3 justify-evenly min-w-1/2 ">
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-center border px-4  py-2 rounded-3xl hover:scale-[1.05] transition">Live Demo</a>
                    <a href={github}  rel="noopener noreferrer" target="_blank" className="text-center border px-4 py-2 rounded-3xl hover:scale-[1.05] transition">Github</a>
                </div>
            </div>
            {/* for image */}
            <div className="flex-1  flex justify-center ">

                <img src={img} width="1280px" height="797px" alt="project Image" className='w-2/3 md:w-[90%] object-cover rounded-lg object-center' />


            </div>
        </div>
    )
}
export default ProjectCard;