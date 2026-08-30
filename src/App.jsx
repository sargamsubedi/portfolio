import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"

function App() {

  return (
    <div className="bg-heroBg max-w-300 mx-auto">
      <section className="bg-primaryColor m-3 rounded-2xl">
        <Navbar />
        <Hero />
      </section>

      <section className="m-3 rounded-2xl bg-linear-to-br from-secondaryColor to-ternaryColor" id="about">
        <About />
      </section>

      <section className="bg-primaryColor m-3 rounded-2xl" id="work">
        <Project />
      </section>
      
      <section className="bg-primaryColor m-3 rounded-2xl" id="contact">

        <Contact />
      </section>

      
        <Footer />
    </div>
  )
}

export default App
