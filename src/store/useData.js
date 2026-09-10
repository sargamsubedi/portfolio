import { create } from "zustand";

//project SS
import youtube from '../assets/project_Screenshots/youtube.png'
import starmart from '../assets/project_Screenshots/starmart.png'
import selhono from '../assets/project_Screenshots/selhono.png'
import expense_tracker from '../assets/project_Screenshots/expense_tracker.png'
import asian_food_restaurant from '../assets/project_Screenshots/asian_food_restaurant.png'

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
                img: starmart,
                name: "SmartMart Ecommerce",
                description: "StarMart is a responsive e-commerce web application built with React, featuring dynamic product data powered by the DummyJSON API. It uses React Router for seamless navigation and React Query for efficient data fetching and caching. The interface is designed with Tailwind CSS to provide a clean, modern, and responsive shopping experience across devices.",
                tech: [],
                liveDemo: "https://star-mart-ecommerce-git-main-sargamsubedi.vercel.app/",
                github: "https://github.com/sargamsubedi/StarMart-ecommerce",

            },
                        {
                img: asian_food_restaurant,
                name: "Asian Food Restaurant",
                description: "A modern and responsive Asian food restaurant website designed to showcase authentic cuisine, featured dishes, and a welcoming dining experience. Built with React and Tailwind CSS, focusing on clean UI, responsive layouts, and an engaging user experience.",
                tech: [],
                liveDemo: "https://asian-food-restaurant.vercel.app/",
                github: "https://github.com/sargamsubedi/AsianFood_Restaurant",

            },
            {
                img: selhono,
                name: "selhono",
                description: " A modern and responsive interior design website built with React and Tailwind CSS, featuring a clean layout and elegant UI to showcase design services and projects.",
                tech: [],
                liveDemo: "https://selhonointerior-17734vvy9-sargamsubedi.vercel.app/",
                github: "https://github.com/sargamsubedi/selhono",

            },
            {
                img: youtube,
                name: "Youtube Clone",
                description: "A responsive YouTube home page clone built to recreate the platform's familiar layout and user experience, featuring video cards, navigation, and a clean responsive interface.",
                tech: [],
                liveDemo: "https://youtube-clone-iyhteszve-sargamsubedi.vercel.app/",
                github: "https://github.com/sargamsubedi/YoutubeClone",

            },
            {
                img: expense_tracker,
                name: "Expense Tracker",
                description: "A simple and responsive expense tracking application built with React and Tailwind CSS. Users can add, categorize, edit, and delete expenses while tracking total spending and filtering expenses by category.",
                tech: [],
                liveDemo: "https://expense-tracker-two-smoky-73.vercel.app/",
                github: "https://github.com/sargamsubedi/Expense-Tracker/tree/main/exptrack",

            },
        ]
    }
))

export default useData;