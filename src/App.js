import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import './App.css';
import Home from './components/Home/Home';
import { useRef } from 'react';



function App() {

 const homeRef = useRef(null);  
 const aboutmeRef = useRef(null);  
 const skillsRef = useRef(null);  
 const projectRef = useRef(null);  
 const contactRef = useRef(null);  

 const  scrollToSection = (section) =>{
  console.log("scrolling to ",section);
  if(section==='home')
    homeRef.current.scrollIntoView({behavior:'smooth'});
  if(section==='aboutme')
    aboutmeRef.current.scrollIntoView({behavior:'smooth'});
  if(section==='skills')
    skillsRef.current.scrollIntoView({behavior:'smooth'});
  if(section==='project')
    projectRef.current.scrollIntoView({behavior:'smooth'});
  if(section==='contact')
    contactRef.current.scrollIntoView({behavior:'smooth'});
 }
  return (
    <div className="App">
        <Navbar  onNavClick={scrollToSection}/>
        <section ref={homeRef} id="home"> <Home /></section>
        <section ref={aboutmeRef} id="aboutme"><AboutMe /></section>
        <section ref={skillsRef} id="skills"><Skills /></section>
        <section ref={projectRef} id="project"> <Project /></section>
        <section ref={contactRef} id="contact"><Contact /></section>
    </div>
  );
}
export default App;
