import useData from "../store/useData";
import ProjectCard from "./ProjectCard";


function Project() {

    const projects = useData(state=>state.projects);
    return (
        <div className="text-textWhite w-full space-y-5 text-2xl  py-19 px-10 ">

            <h1 className="text-5xl font-medium">My Projects</h1>


            {
                projects.map((project)=><ProjectCard key={project.name}  project={project}/>)
                
            }

        </div>
    )
}

export default Project;