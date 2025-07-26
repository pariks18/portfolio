import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "/web1.png";
import img2 from "/Screenshot (168).png";
import img3 from "/Screenshot (169).png";
const projects = [
  {
    name: "YatraJunction",
    image: img1,
    github: "https://github.com/yourusername/weather-app",
  },
  {
    name: "Landing Page",
    image: img2,
    github: "https://github.com/yourusername/todo-app",
  },
  {
    name: "Tic Tac Toe",
    image: img3,
    github: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className=" text-white py-14 px-4 ">
          <h2
            className="text-xl sm:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 
  animate-glow tracking-wide mb-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.9)] fontpop"
          >
            My Projects
          </h2>

          <div
            className="max-w-5xl mx-auto py-10 p-2 rounded-2xl border-2 border-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black 
              hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 
              transition-all duration-700 shadow-[0_0_30px_#4b5563]"
          >
            <Carousel
              showIndicators={false}
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={4000}
            >
              {projects.map((project, index) => (
                <div key={index} className="text-center projectimg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg imagec"
                  />
                  <h3
                    className="text-2xl mt-4 font-extrabold text-white bg-black px-3 py-1 rounded-lg 
             shadow-md hover:text-yellow-300 hover:shadow-[0_0_15px_#facc15] transition-all duration-300 mx-20"
                  >
                    {project.name}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-5 py-3 mt-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl
             shadow-md hover:shadow-[0_0_15px_#facc15] hover:text-yellow-300 hover:scale-105 transition-all duration-300 mb-4"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
