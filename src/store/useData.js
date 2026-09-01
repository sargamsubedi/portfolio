import { create } from "zustand";
import tree from '../assets/tree.jpg'

//project SS
import youtube from '../assets/project_Screenshots/youtube.png'
import selhono from '../assets/project_Screenshots/selhono.png'
import expense_tracker from '../assets/project_Screenshots/expense_tracker.png'

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
                img: selhono,
                name: "selhono",
                description: " A modern and responsive interior design website built with React and Tailwind CSS, featuring a clean layout and elegant UI to showcase design services and projects.",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/selhono",

            },
            {
                img: youtube,
                name: "Youtube Clone",
                description: "A responsive YouTube home page clone built to recreate the platform's familiar layout and user experience, featuring video cards, navigation, and a clean responsive interface.",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/YoutubeClone",

            },
            {
                img: expense_tracker,
                name: "Expense Tracker",
                description: "A simple and responsive expense tracking application built with React and Tailwind CSS. Users can add, categorize, edit, and delete expenses while tracking total spending and filtering expenses by category.",
                tech: [],
                liveDemo: "",
                github: "https://github.com/sargamsubedi/Expense-Tracker/tree/main/exptrack",

            },
        ]
    }
))

export default useData;