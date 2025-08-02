import TargetCursor from "./TargetCursor";
let SecondSection = () => {
  return (
    <>
      <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>
      <section id="home">
        <div className="secondbox fontpop">
          <div className="secondboxcard cursor-pointer scale-105 transition-transform duration-300 rounded-lg border-4 border-violet-400 bg-black text-white hover:drop-shadow-[0_0_20px_#a78bfa] transition-all duration-500">
            <h2 className=" tracking-tight sm:text-3xl text-violet-400 drop-shadow-[0_0_1px_#a78bfa] font-bold ">
              Hi, I’m{" "}
              <span className="inline-block scale-125 transition-all duration-300 ease-in-out cursor-pointer pl-[30px] hover:pb-[5px] text-cyan-400 cursor-target Nameinsecondsection">
                Parikshit Gole,
              </span>
            </h2>

            <p className="mt-8 text-s  font-medium text-pretty text-white sm:text-xl/8 leading-relaxed transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Welcome to my portfolio!
              <br />
              Feel free to explore and check out my projects, skills, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
