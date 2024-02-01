import React, { useState } from 'react'
import { SKILLS } from '../utils/data.js'
import SkillCard from './SkillCard.jsx'
import SkillsInfoCard from './SkillsInfoCard.jsx'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  }

  return (
    <section className="skills_container">
        <h5>Technical Proficiency</h5>
        <div className="skills_content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard 
                    key={item.title}
                    iconUrl={require(`../assets/images/${item.icon}`)}
                    title={item.title}
                    isActive={selectedSkill.title===item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }}  
                    />
                ))}
            </div>
            <div className="skills_info">
                <SkillsInfoCard 
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills