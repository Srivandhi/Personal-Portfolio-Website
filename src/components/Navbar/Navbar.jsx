import { useRef } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {

    const ref = useRef();
    const handleClickmenu = () => {
        ref.current.style.display = 'flex';
    }
    const handleclickCross = () => {
        ref.current.style.display = 'none';
    }

    return <>
        <nav className='navbar'>
            <ul>
                <li ><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("home"); }}>Sri</a></li>
                <li className='hideOnMobile hov'><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("home"); }}>Home</a></li>
                <li className='hideOnMobile hov'><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("aboutme"); }}>About</a></li>
                <li className='hideOnMobile hov'><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("skills"); }}>Skills</a></li>
                <li className='hideOnMobile hov'><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("achievements"); }}>Achievements</a></li>
                <li className='hideOnMobile hov'><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("project"); }}>Projects</a></li>
                <li className='hideOnMobile' id="contact"><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("contact"); }}>Contact</a></li>

                <svg onClick={handleClickmenu} className='menu' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 1)">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
            </ul>
        </nav>
        <nav className='sidebar' ref={ref}>
            <ul>
                <li className='cross' onClick={handleclickCross}>X</li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("home"); }}>Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("aboutme"); }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("skills"); }} >Skills</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("achievements"); }}>Achievements</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("project"); }}>Projects</a></li>
                <li id="contact"><a href="#" onClick={(e) => { e.preventDefault(); onNavClick("contact"); }}>Contact</a></li>
            </ul>
        </nav>
    </>
}
export default Navbar;