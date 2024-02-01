import React from 'react'

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills_card ${isActive ? "active" : ""}`} onClick={onClick}>
        <div className="skill_icon">
            <img src={iconUrl} alt={title}/>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default SkillCard