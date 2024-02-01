import React from 'react';
import Tech1 from '../assets/images/atom.png';
import Tech2 from '../assets/images/html.png';
import Tech3 from '../assets/images/css-3.png';
import Tech4 from '../assets/images/js.png';
import Sahil from '../assets/images/sahil.jpeg'
import Resume from '../assets/Resume.pdf';

const About = () => {

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
    <div>
    <section className="about_container">
        <div className="about_content">
            <h2>Hello, It's Me</h2>
            <h1>Sahil Kumar</h1>
            <p>Greetings! I am a third-year student pursuing a Bachelor's degree in Computer Science & Engineering. What excites me the most about web development is the ability to bring ideas to life and create applications that solve real-world problems.
                The ever-evolving nature of the field keeps me motivated to continuously learn and grow. I embrace every obstacle as an opportunity to learn and improve.
                I believe that perseverance and determination are key to overcoming any hurdle.
                I'm eager to be part of a dynamic team and contribute to meaningful projects that make a positive impact.
            </p>
        </div>
        <div className="about_img">
            <div>
                <div className="tech_icon">
                    <img src={Tech1} alt="" />
                </div>
                <img src={Sahil} alt="" />
            </div>
            <div>
                <div className="tech_icon">
                    <img src={Tech2} alt="" />
                </div>
                <div className="tech_icon">
                    <img src={Tech3} alt="" />
                </div>
                <div className="tech_icon">
                    <img src={Tech4} alt="" />
                </div>
            </div>
        </div>
        
    </section>
    <div className="about_btns">
        <a href="#contact" className="contact_btn" onClick={handleClick}>Let's Talk</a>
        <button className="download" onClick={handleDownload}>Download Resume</button>
    </div>
    </div>     
  )
}

export default About