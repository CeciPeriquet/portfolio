//IMPORTS
//Styles
import "../styles/App.scss";
//Pictures

//Services

import projects from "../data/projects.json";

//Hooks
import { createContext, useState } from "react";

//Components
import Header from "./Header";
import Info from "./Info";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Footer from "./Footer";
import Skills from "./Skills";
import Contact from "./Contact";
import BackToTopArrow from "./BackToTopArrow";

export const ThemeContext = createContext(null);
//FUNCTION
function App() {
  //Vars
  const projectData = projects;
  const [theme, setTheme] = useState("light");

  //Events

  //RENDER
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Header theme={theme} setTheme={setTheme}></Header>
        <main className="main">
          <Info theme={theme} setTheme={setTheme}></Info>
          <ProjectList projectData={projectData}></ProjectList>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Contact></Contact>
          <BackToTopArrow></BackToTopArrow>
        </main>
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
