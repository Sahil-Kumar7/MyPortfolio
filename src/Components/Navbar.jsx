import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Resume from '../assets/Resume.pdf';
import Logo from '../assets/images/logo1.png';
import MobileNav from './MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    
    const handleDownload = () => {
        window.open(Resume,'_blank');
      }  

    const handleClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target section id
        const targetSection = document.getElementById(targetId); // Find the target section element
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 10, /* Adjust for navbar height if fixed */
                behavior: 'smooth' // Scroll behavior: smooth
            });
        }
    }
    
      
    
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav_wrapper">
                <div className="nav_content">
                    <img src={Logo} alt="" className="nav_logo" />

                    <ul>
                        <li>
                            <a href="#about" className="menu_item" onClick={handleClick}>About Me</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu_item" onClick={handleClick}>Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="menu_item" onClick={handleClick}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="menu_item" onClick={handleClick}>Contact Me</a>
                        </li>
                        <button className="display_btn" onClick={handleDownload}>Download Resume</button>
                    </ul>
                    <button className="menu_btn" onClick={toggleMenu}>
                        {openMenu ?  <AiOutlineClose/> : <FaBars />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar