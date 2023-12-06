import "./App.css";
import Header from "./Components/Header";
import Salutation from "./Components/Salutation";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AboutMe from "./Components/AboutMe";

function App() {

  return (
    <>
      <Header />
      <Salutation />
      <Projects id="Projects"/>
      <AboutMe id="AboutMe"/>
      <Contact  id="Contact"/>
    </>
  );
}

export default App;
