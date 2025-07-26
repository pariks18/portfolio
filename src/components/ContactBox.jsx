// src/components/Contact.jsx
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactBox = () => {
  return (
    <section id="contact" className=" text-white sm:px-10">
      <div className="lastbox border-2 border-blue-400 rounded-xl shadow-[0_0_20px_#3b82f6] p-4 text-white backdrop-blur-md text-center font-semibold fontpop">
        <h2
          className="text-xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 
  animate-glow tracking-wide mb-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_45px_rgba(255,255,255,0.9)]"
        >
          Get in Touch
        </h2>

        <p className="text-lg mb-6">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:parikshit2605@gmail.com"
            className="text-cyan-400 font-semibold hover:underline text-lg cursor-target"
          >
            📧 parikshit2605@gmail.com
          </a>

          <div className="flex gap-6 mt-4 text-2xl">
            <a
              href="https://github.com/pariks18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parikshit-gole-15a11b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
