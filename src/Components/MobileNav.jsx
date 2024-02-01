import React from 'react';
import Logo from '../assets/images/logo.png';
import Resume from '../assets/Resume.pdf';

const MobileNav = ({isOpen, toggleMenu}) => {


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
        <div className={`mobile_menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile_menu-container">
                <img src={Logo} alt="" className="mobile_logo" />
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
            </div>
        </div>
    </>
  )
}

export default MobileNav