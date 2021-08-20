import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Landing from "./components/Landing/Landing"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Contacts from './components/Contacts/Contacts';
import "./App.scss"
import { useState} from "react"
import Menu from './components/Menu/Menu';


function App() {

const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <div className="app">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}

        <div className="sections">
          
          <Landing />
          <AboutMe />
          <Projects />
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
