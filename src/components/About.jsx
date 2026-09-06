import myImage from '../assets/tree.jpg'
import TechStack from './TechStack';



function About() {

    return (
        <div className='  py-19 px-20 text-3xl text-textWhite space-y-10'>
                    <h1 className=" text-3xl md:text-5xl font-medium text-center lg:text-left">About Me</h1>

            <div className="flex flex-col-reverse lg:flex-row gap-10">

                <div className="text-textWhite lg:max-w-1/2 space-y-10">

                    <p className="text-2xl sm:leading-10 ">
                        I enjoy turning ideas into interfaces that feel simple, intuitive, and enjoyable to use.
                    </p>
                    <div className="space-y-5 text-2xl leading-10 ">

                        <p>What I care about</p>
                        <ul className="list-disc list-inside">
                            <li>Clean UI</li>
                            <li>Responsive design</li>
                            <li>Reusable components</li>
                            <li>User experience</li>

                        </ul>
                    </div>


                </div>



                <div className="flex flex-1 justify-center items-center">

                    <img src={myImage} width="1280px" height="797px" alt="my image" className=' w-[80%]   aspect-square rounded-full object-center' />
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