import ShapeBlur from "./ShapeBlur";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="thirdborder border-2 border-blue-400 rounded-xl shadow-[0_0_20px_#3b82f6] p-4 text-white backdrop-blur-md text-white mt-2 py-16 px-6 sm:px-10 fontpop"
    >
      <h2
        className="text-xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 
  animate-glow tracking-wide mb-16 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.9)]"
      >
        About Me
      </h2>

      <div className="max-w-4xl  mx-auto text-xl leading-relaxed text-center font-semibold">
        <p className="mb-6">
          Hello! I'm a passionate{" "}
          <span className="text-teal-400 font-semibold">
            Frontend Developer
          </span>{" "}
          currently in my final year of engineering. I enjoy building clean,
          responsive, and user-friendly web interfaces using{" "}
          <span className="text-yellow-300">
            HTML, CSS, JavaScript, React.js
          </span>
          , and <span className="text-blue-400">Tailwind CSS</span>.
        </p>

        <p className="mb-6">
          I'm constantly exploring new technologies and currently diving into
          backend development with{" "}
          <span className="text-green-400 font-semibold">Node.js</span> and{" "}
          <span className="text-green-300 font-semibold">MongoDB</span> to
          become a full-stack developer.
        </p>

        <p>
          I'm a fast learner, team player, and love turning ideas into
          real-world web experiences. Whether it's coding a landing page or
          integrating APIs, I aim to write clean and efficient code with a
          strong focus on design and performance.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
