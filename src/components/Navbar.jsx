
function Navbar()
{
    return(
        <nav className="text-textWhite flex justify-between  py-5 px-20 ">

            <p className="italic text-3xl">Sargam Subedi</p>

            <div className="flex gap-10 text-xl">
                <a href="#about" className="transition-transform duration-200 hover:scale-[1.1]">About</a>
                <a href="#work" className="transition-transform duration-200 hover:scale-[1.1]">Work</a>
                <a href="#contact" className="transition-transform duration-200 hover:scale-[1.1]">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;