import React, { useRef } from 'react'
import { PROJECTS } from '../utils/data.js';
import ProjectCard from './ProjectCard.jsx';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Projects = () => {

  const sliderRef = useRef()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  }

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <section className="projects_container">
        <h5>Latest Projects</h5>
        <div className="projects_content">
          <div className="arrow_right" onClick={slideRight}>
            <IoIosArrowForward />
          </div>
          <div className="arrow_left" onClick={slideLeft}>
            <IoIosArrowBack />
          </div>
          <Slider ref={sliderRef}  {...settings}>
            {PROJECTS.map((item) => (
              <ProjectCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
    </section>
  )
}

export default Projects