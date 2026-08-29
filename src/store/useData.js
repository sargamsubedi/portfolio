import { create } from "zustand";

const useData = create(()=>(
    {
        techStack: [
            {imgName: "html.svg" , techName:"HTML"},
            {imgName: "css.svg" , techName:"CSS"},
            {imgName: "js.svg" , techName:"JavaScript"},
            {imgName: "react.svg" , techName:"ReactJs"},
            {imgName: "tailwind.svg" , techName:"TailwindCSS"},
        ]
    }
))

export default useData;