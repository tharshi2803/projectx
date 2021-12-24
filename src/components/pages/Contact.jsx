import React,{Component} from "react";
import {Form, Row, Col} from 'react-bootstrap';
import "../pages/contact.css";
import {Formik} from "formik";
import * as yup from "yup";
import Image1 from '../images/contact_pic.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact(){
    return(
    <>
		<div className="coverg">
		<div className="text">Connect with us...</div>
		<div className="contact-box">
		
			<div className="left">
				<div className="contactimage">
				<img src={Image1} height="180px" width="320px"/> </div>
				<div className="address">
					<p>Phone number - 0123456789</p>
					{/*<p>Address -  </p>*/}
				</div>
				<ul className="list-inline mt-4">
            		<li className="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faTwitter} size="2x" color="#55ACEE"/></a></li>
            		<li className="list-inline-item"><a href="#" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3B5998"/></a></li>
            		<li className="list-inline-item"><a href="#" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" color="#cd486b"/></a></li>
            		<li className="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/></a></li>
          		</ul>
			</div>
			<div className="right">
				
				<input type="text" className="field" placeholder="Your Name" />
				<input type="text" className="field" placeholder="Your Email" />
				<input type="text" className="field" placeholder="Phone" />
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
			</div>
		</div>
		</div>
	</>
    )
}
export default Contact;