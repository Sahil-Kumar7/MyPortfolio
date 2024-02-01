import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact_form-content">
        <form action="https://formspree.io/f/mkndjgvv" method='POST'>
            <div className="name_container">
                <input type="text" name='firstname' placeholder='First name'/>
                <input type="text" name='lastname' placeholder='Last name'/>
            </div>
            <input type="text" name='subject' placeholder='Subject' />
            <input type='email' name='email' placeholder='Email' />
            <textarea type="text" name="message" rows={4} placeholder='Message' />
            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm