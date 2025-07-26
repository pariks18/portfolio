let ThirdSection = () => {
  const links = [
    { name: "My Projects", targetid: "projects" },
    { name: "Skills & Tech Stack", targetid: "skills" },
    { name: "About Me", targetid: "about" },
    { name: "Contact", targetid: "contact" },
  ];

  const stats = [
    { name: "Projects Completed", value: "4+" },
    { name: "Tech Stack Learned", value: "React, JS, CSS" },
    { name: "Final Year Student", value: "B.Tech - 2026" },
    { name: "Open to Work", value: "Yes" },
  ];

  let scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="thirdcontainer mx-auto max-w-2xl lg:mx-0 lg:max-w-none
      
      
      
      "
      >
        <div className="thirdborder border-2 border-blue-400 rounded-xl shadow-[0_0_20px_#3b82f6] p-4 text-white backdrop-blur-md">
          <div
            className=" text-xl flexthird
          
          
          "
          >
            {links.map((link) => (
              <a
                key={link.name}
                onClick={() => {
                  scroll(link.targetid);
                }}
                className="cursor-target transition-all duration-500 ease-in-out 
            hover:text-cyan-300 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] 
            hover:scale-105 text-2xl thirdflexitem"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 flexthird">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col-reverse gap-1 transition-all duration-500 ease-in-out 
            hover:text-cyan-300 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] 
            hover:scale-105  "
              >
                <dt className="text-base/7 ">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight thirdflexitem ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};
export default ThirdSection;
