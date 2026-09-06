import useData from "../store/useData";
import ProjectCard from "./ProjectCard";


function Project() {

    const projects = useData(state=>state.projects);
    return (
        <div className="text-textWhite w-full space-y-5 text-2xl  py-19 px-10 ">

            <h1 className="text-3xl md:text-5xl font-medium">My Projects</h1>


            {
                projects.map((project, index)=><ProjectCard key={project.name} index={index} project={project}/>)
                
            }

        </div>
    )
}

export default Project;