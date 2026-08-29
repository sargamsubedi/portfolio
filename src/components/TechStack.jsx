import useData from "../store/useData"

function TechStack() {

    const techStack = useData(state => state.techStack);
    return (
        <div className="flex flex-wrap gap-5 items-center divide-x-2 text-xl">
            {
                techStack.map((tech) => (
                    <div key={tech.techName} className="flex gap-3 items-center px-3">
                        <img src={tech.imgName} alt={tech.techName} className="size-10"/>
                        <p>{tech.techName}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default TechStack;