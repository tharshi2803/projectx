import React from "react";
import '../Newsletter/newsletter.css';
import image from "../images/newsletter.jpg";
import Alert from 'react-bootstrap/Alert';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function NewsLetter() {

  return (
    <>  
    <br />
    <br /> 
      <div className="detailscontainer">
        <div className="innercontainer">
          <div className="header">Hey, wait...</div>
          <div className="subheader">Subscribe to our newsletter!</div>
          <div className="textp">
            You will never miss our podcasts and latest news.
          </div>
          <div className="formgroup">
            <input className="emailinput" type="text" placeholder="example@email.com" />
            <Popup trigger={<button className="btnsubscribe" type="submit"> Subscribe</button>}
              position="right center">
                <div className="pop-up">Thank you for subscribing </div>
                <div className="pop-up">We'll get back to You soon....</div>
            </Popup>
            {/* <button className="btnsubscribe" type="submit">Subscribe</button> */}
            {/* <button className="btnsubscribe" type="submit" onClick={handleClick}>Subscribe</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsLetter;