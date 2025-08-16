import { NavBar } from '@/app/components/NavBar'
import { ScrollToButton } from '@/app/components/ScrollToButton'

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-inter text-5xl md:text-7xl bg-black mb-6 bg-clip-text text-transparent">
            Grace Kim
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8">
            Computer Science and Cognitive Psychology student at Northeastern University.
          </p>
          <ScrollToButton targetId="about">
            Learn More
          </ScrollToButton>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm currently a third-year student from New Jersey, but currently live in Boston. I'm 
                fascinated about how AI can shape our future along with the creativity and 
                research behind different UI/UX concepts. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <p className="text-gray-600">Project {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white flex items-center py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch!</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kim.grac@northeastern.edu"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}