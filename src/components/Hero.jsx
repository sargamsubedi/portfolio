import myImage from '../assets/tree.jpg'


function Hero() {
    return (
        <div className="flex  py-19 px-20 text-2xl">
            <div className="text-textWhite max-w-1/2 space-y-4">
                <p className="uppercase text-5xl  leading-14 font-bold italic bg-linear-to-r from-purple-400 to-pink-700 text-transparent bg-clip-text">Frontend Developer </p>
                <p className="uppercase text-4xl font-semibold">Hello i am Sargam Subedi </p>
                <p className="leading-10 font-medium">I build clean, responsive, and user-friendly web experiences with React and Tailwind CSS. </p>
                <p className="leading-10 text-lg pt-10"> Available for Internship </p>

            </div>

            <div className="flex flex-1 justify-center items-center">

                    <img src={myImage} width="1280px"  height="797px" alt="my image" className=' w-[80%]   aspect-square rounded-full object-center'/>
            </div>
        </div>
    )
}
export default Hero;