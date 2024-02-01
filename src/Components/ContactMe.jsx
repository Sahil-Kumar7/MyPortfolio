import React from 'react'
import ContactInfoCard from './ContactInfoCard'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (

    <section className="contact_container">
        <h5>Contact Me</h5>
        <div className="contact_content">
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    iconUrl={require("../assets/images/gmail.png")}
                    text="sahilkumar1103@gmail.com"
                />
                <ContactInfoCard 
                    iconUrl={require("../assets/images/github.png")}
                    text="https://github.com/Sahil-Kumar7"
                />
                <ContactInfoCard 
                    iconUrl={require("../assets/images/linkedin.png")}
                    text="https://www.linkedin.com/in/sahil7kumar/"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe