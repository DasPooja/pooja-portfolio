import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import CircleFollowMouse from "./CircleFollowMouse";

function MyPortfolioComp() {
  return (
    <>
      <CircleFollowMouse />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
    </>
  );
}

export default MyPortfolioComp;
