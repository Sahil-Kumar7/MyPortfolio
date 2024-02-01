import React from 'react'

const ProjectCard = ({details}) => {
  return (
    <div className="project_card">
      <h6>{details.title}</h6>
      <div className="project_tech">{details.tech}</div>
      <ul>
        {details.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project_card-btns">
        <a href={details.code} target="_blank" rel="noreferrer">Code</a>
        <a href={details.live} target="_blank" rel="noreferrer">Live</a>
      </div>
    </div>
  )
}

export default ProjectCard