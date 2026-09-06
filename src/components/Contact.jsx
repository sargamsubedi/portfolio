import { useState } from "react";

function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(
                "https://formspree.io/f/xyeypdqk",
                {
                    method: "POST",
                    body: data,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => {
                    setStatus("noaction")
                }, 2000);
            } else {
                setStatus("error");
                setTimeout(() => {
                    setStatus("noaction")
                }, 2000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => {
                setStatus("noaction")
            }, 2000);
        }
    };

    const [status, setStatus] = useState("noaction")

    return (

        <div className='  py-19 px-20 text-3xl text-textWhite space-y-10'>
            <h1 className="text-3xl md:text-5xl font-medium">Contact</h1>
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
                <form
                    className="flex-1 space-y-5 my-10 text-xl"
                    onSubmit={handleSubmit}
                >


                    <div className="flex flex-col gap-3 max-w-2/3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3 max-w-2/3">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                        />
                    </div>

                    <button
                        className="mt-4 bg-purple-600 px-5 py-3 rounded-3xl hover:bg-purple-700 hover:scale-[1.05] transition"
                        type="submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-500">
                            Message sent successfully!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-500">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>

            </div>
        </div>
    )
}

export default Contact;