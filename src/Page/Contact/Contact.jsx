import React from 'react'
import './Contact.css'
import { FaEnvelopeOpen,FaPhoneSquareAlt ,FaFacebook ,FaGithub ,FaInstagram,FaWhatsapp ,FaLinkedin   } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


function Contact() {
  return (
   <section className="contact section">
    <h2 className='section_title'>GET IN <span>TOUCH</span></h2>

    <div className="contact_container container grid">
      <div className="contact_data">
        <h3 className="contact_title">
          Don't be Shy !
        </h3>
        <p className="contact_description">
          Feel free to get in touch with me.I am always open to discussing new projects,creative ideas or opportunities to be part of your version...
        </p>
        <div className="contact_info">
          <div className="info_item">
            <FaEnvelopeOpen className='info_icon'/>
            <div>
              <span className="info_title">Mail me</span>
              <h4 className="info_desc">tharukanadun707@gmail.com</h4>
            </div>
          </div>

          <div className="info_item">
            <FaPhoneSquareAlt className='info_icon'/>
            <div>
              <span className="info_title">Call me</span>
              <h4 className="info_desc">+94761071621</h4>
            </div>
          </div>

          <div className="contact_socials">
            <a href="https://www.facebook.com/tharuka.nadun.9?mibextid=9R9pXO " className='contact_social-link'><FaFacebook/></a>

            <a href="https://instagram.com/tharuka___nadun?igshid=OGQ5ZDc2ODk2ZA==  " className='contact_social-link'><FaInstagram/></a>

            <a href="http://wa.me/+94761071621 " className='contact_social-link'><FaWhatsapp/></a>

            <a href="https://github.com/tharukanadu " className='contact_social-link'><FaGithub/></a>

            <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit " className='contact_social-link'><FaLinkedin/></a>
          </div>

        
        </div>
        
      </div>
      <form  className="contact_form">
            <div className="form_input-group">
              <div className="form_input-div">
                <input type="text" className="form_control" placeholder='your name' />
              </div>

              <div className="form_input-div">
                <input type="email" className="form_control" placeholder='your email' />
              </div>

              <div className="form_input-div">
                <input type="text" className="form_control" placeholder='Subject' />
              </div>

              
            </div>
            <div className="form_input-div">
                <textarea placeholder='Your message' className='form_control textarea'></textarea>
              </div>

          <button className="button">Send Message <span className="button_icon contact_button-icon"><FiSend/></span></button>
          </form>
    </div>
   </section>
  )
}

export default Contact
