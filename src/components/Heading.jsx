import { Link, useNavigate } from "react-router-dom";

export default function Heading() {
  let toContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section id="header">
        <div className="header fontpop font-extrabold">
          <div
            className="header01 text-7xl text-emerald-600 hover:text-sky-400 
        hover:scale-110 hover:drop-shadow-[0_0_10px_#00f] transition-all duration-600 ease-in-out"
          >
            <Link to="#">Portfolio</Link>
          </div>
          <div className="header02 text-slate-100">
            <Link
              to="#"
              className="header02item hover:underline 
            hover:text-blue-700
            transition-all duration-600 ease-in-out
            text-blue-200 text-3xl"
              onClick={toContact}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
