
import TechStack from './TechStack';
import ProfilePicture from '../assets/profile_picture.png'



function About() {

    return (
        <div className='  py-19 px-5 sm:px-10 md:px-20 text-2xl text-textWhite space-y-10'>
                    <h1 className=" text-3xl md:text-5xl font-medium text-center lg:text-left">About Me</h1>

            <div className="flex flex-col-reverse lg:flex-row gap-10">

                <div className="text-textWhite lg:max-w-1/2 space-y-10 font-normal">

                    <p>
                    Hi, I'm a Frontend Developer who enjoys turning ideas into clean, interactive, and user-friendly web experiences.
                    </p>
                    <p>I work primarily with HTML, CSS, JavaScript, React, and modern frontend tools, with a strong focus on responsive design, accessibility, performance, and writing maintainable code.</p>
                    <p>I'm always learning, experimenting with new technologies, and looking for better ways to build for the web.</p>
                  

                </div>



                <div className="flex flex-1 justify-center items-center px-5">

                    <img src={ProfilePicture} width="2469px" height="2760px" alt="my image" className='w-[80%] aspect-square object-center rounded-full bg-white   ' />
                </div>
            </div>

            {/* for tech stack i use */}
            <div className='space-y-4'>
                <p className='font-semibold'>Tech Stack</p>
                <TechStack />


            </div>
        </div>
    )
}
export default About;