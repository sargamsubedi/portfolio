
function Navbar()
{
    return(
        <nav className="text-textWhite flex justify-between  py-5 px-20 ">

            <p className="italic text-xl sm:text-3xl">Sargam Subedi</p>

            <div className="relative">

                <input type="checkbox" id="menu" className=" peer hidden"/>
                <label htmlFor="menu" className="md:hidden"><img src="menu.svg" alt="menu" className="size-10" /></label>
        


            <div className="hidden z-2 absolute right-0 peer-checked:grid grid-cols-1 gap-3 mt-3 md:flex md:gap-10 md:mt-0 text-xl">
                <a href="#about" className="transition-transform duration-200 hover:scale-[1.1]">About</a>
                <a href="#work" className="transition-transform duration-200 hover:scale-[1.1]">Work</a>
                <a href="#contact" className="transition-transform duration-200 hover:scale-[1.1]">Contact</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;