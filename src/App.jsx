import About from "./Component/About";
import Hero from "./Component/Hero";
import Navi from "./Component/Navi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from "./Component/Technologies";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <div className=" text-neutral-300 w-full border border-red"style={{overflowX:"hidden"}}>
        <div className="s absolute top-0 z-[-2] min-h-screen  overflow-x-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" style={{overflowX:"hidden"}}>
          <Navi  className="border border-black"/>
          <Hero />
          <About/>
          <Technologies/>
          <Experience/>
          <Project/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
