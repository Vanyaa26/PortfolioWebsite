import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import AboutMe from "./Components/AboutMeHover";
import Menu from "./Components/Menu"
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";


function App() {
  const location = useLocation();

  return (
    <div>
      {/* Show Header and Navigation only on the Home Page */}
      {location.pathname === "/" && (
        <>
          <Header />
          <Navigation />

        </>
      )}

      <Routes>
        
        <Route path="/about" element={<AboutMe />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        
       
        
      </Routes>
    </div>
  );
}

export default App;
