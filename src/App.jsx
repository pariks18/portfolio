import { BrowserRouter } from "react-router-dom";
import Heading from "./components/Heading";
import "./App.css";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import ContactBox from "./components/ContactBox";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg">
          <Heading></Heading>
          <SecondSection></SecondSection>
          <ThirdSection></ThirdSection>
          <Projects></Projects>
          <Skills></Skills>
          <AboutMe></AboutMe>
          <ContactBox></ContactBox>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
