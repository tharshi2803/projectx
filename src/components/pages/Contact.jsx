import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../pages/contact.css";
import Image1 from '../images/contact_pic.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nq58e3', 'template_260yyih', form.current, 'user_zylZbn9OlKZ3C0ofmXknj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

	<div className="contact-background">
 		<div className="text">Connect with us...</div>
 		<div className="contact-box">
		
 			<div className="left">
 				<div className="contactimage">
 				<img src={Image1} height="auto" width="300px"/> </div>
 				<div className="address">
 					<p>Phone number - 0123456789</p>
 					{/*<p>Address -  </p>*/}
				
 				<ul className="list-inline mt-4">
             		<li className="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faTwitter} size="2x" color="#55ACEE"/></a></li>
             		<li className="list-inline-item"><a href="#" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3B5998"/></a></li>
             		<li className="list-inline-item"><a href="#" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" color="#cd486b"/></a></li>
             		<li className="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/></a></li>
           		</ul></div>
 			</div>
 			<div className="right">
				  <form ref={form} onSubmit={sendEmail}>
					  
					  <input type="text" name="user_name" className="field" placeholder="Your Name" />
					  
					  <input type="email" name="user_email" className="field" placeholder="Your Email" />
					  
					  <input type="text" name="contact_number" className="field" placeholder="Contact number" />
					  
					  <textarea name="message" className="field" placeholder="Message" />

					  <Popup trigger={<button className="btn" type="submit"> Send</button>}
						  position="right center">
						  <div className="pop-up">Thank you for contacting us,We'll get back to You soon....</div>
					  </Popup>
				  </form>
				  <br />
				  <br />
				  
 			</div>
 		</div>
 		</div>

    
  );
}; 
export default Contact;

