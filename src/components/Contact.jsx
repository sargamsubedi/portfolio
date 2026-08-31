import { useNavigate } from "react-router";

function Contact() {

    const navigate = useNavigate();
    return (

        <div className='  py-19 px-20 text-3xl text-textWhite space-y-10'>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl sm:leading-8 lg:leading-14 font-medium">Contact</h1>
            <div className="flex gap-10 flex-col md:flex-row">

                <div className="text-textWhite md:max-w-1/2 space-y-10">

                    <p className=" text-2xl md:text-3xl sm:leading-8">
                        Let's build something together...
                    </p>

                    <p className="leading-10 text-xl">
                        I'm open to discussing interesting projects, collaborations, and opportunities.
                    </p>

                    {/* contact Methods */}
                    <div className="text-xl space-y-4">

                        <div className="flex gap-3 items-center hover:cursor-pointer w-fit hover:scale-[1.05] transition">
                            <img src="email.svg" alt="Email" className="size-10" />
                            <p className="wrap-anywhere">
                                saragamsubedi998@gmail.com
                            </p>
                        </div>
                        <a href="https://github.com/sargamsubedi"
                            target="_blank"
                            rel="noopener noreferrer" className="flex gap-3 items-center hover:cursor-pointer w-fit hover:scale-[1.05] transition"
                        >

                            <img src="github.svg" alt="Github" className="size-9" />
                            <p>
                                Github
                            </p>
                        </a>
                        <div className="flex gap-3 items-center hover:cursor-pointer w-fit hover:scale-[1.05] transition">

                            <img src="linkedin.svg" alt="Linkedin" className="size-9" />
                            <p>
                                LinkedIn
                            </p>
                        </div>
                    </div>


                </div>

                {/* contact form */}
                <div className="flex-1 space-y-5 my-10 text-xl">

                    <div className="flex flex-col gap-3 max-w-2/3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="name" />
                    </div>

                    <div className="flex flex-col gap-3 max-w-2/3">

                        <label htmlFor="Email">Email</label>
                        <input type="email" name="" id="Email" />
                    </div>

                    <div className="flex flex-col gap-3 max-w-2/3">

                        <label htmlFor="Message">Message</label>
                        <textarea name="" id="Message" />
                    </div>

                    <button className="mt-4 bg-purple-600 px-5 py-3 rounded-3xl hover:bg-purple-700 hover:scale-[1.05] transition">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;