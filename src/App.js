import Projects from "./Projects";
import "./App.css";
import Hero from "./Hero";
import Skils from "./Skils";
import WhyMe from "./WhyMe";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import SingleProject from "./SingleProject";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skils />
              <WhyMe />
              <Projects />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<SingleProject/>} /> 
      </Routes>
    </div>
  );
}

export default App;
