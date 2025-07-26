import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="  text-white py-12 px-4 sm:px-8 thirdborder border-2 border-blue-400 rounded-xl shadow-[0_0_20px_#3b82f6] p-4 text-white backdrop-blur-md fontpop"
      >
        <h2
          className="text-xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 
  animate-glow tracking-wide mb-16 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.9)]"
        >
          Skills & Tech Stack
        </h2>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="cursor-target flex flex-col items-center w-24 hover:scale-110 transition-transform duration-200"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-xl text-center font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
