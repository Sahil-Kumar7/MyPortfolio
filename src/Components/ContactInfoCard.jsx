import React from 'react'

const ContactInfoCard = ({iconUrl, text}) => {
  
  const isEmail = text.includes('@');  
  return (
    <div className="contact_details-card">
        <div className="contact_icon">
            <img src={iconUrl} alt={text} />
        </div>
        {isEmail 
            ? (<a href={`mailto:${text}`} target='_blank' rel="noreferrer">{text}</a>) 
            : (<a href={text} target='_blank' rel="noreferrer">{text}</a>)
        }
        
    </div>
  )
}

export default ContactInfoCard