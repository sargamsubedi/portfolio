import { create } from "zustand";
import tree from '../assets/tree.jpg'
const useData = create(() => (
    {
        techStack: [
            { imgName: "html.svg", techName: "HTML" },
            { imgName: "css.svg", techName: "CSS" },
            { imgName: "js.svg", techName: "JavaScript" },
            { imgName: "react.svg", techName: "ReactJS" },
            { imgName: "tailwind.svg", techName: "TailwindCSS" },
            { imgName: "git.svg", techName: "Git" },
        ],

        projects: [
            {
                img: tree,
                name: "selhono",
                description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis facere vitae!",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/selhono",

            },
            {
                img: tree,
                name: "Youtube Clone",
                description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis facere vitae!",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/YoutubeClone",

            },
            {
                img: tree,
                name: "Expense Tracker",
                description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis facere vitae!",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/Expense-Tracker/tree/main/exptrack",

            },
        ]
    }
))

export default useData;