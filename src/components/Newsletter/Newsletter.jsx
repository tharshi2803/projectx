import React from "react";
import '../Newsletter/newsletter.css';
import image from "../images/newsletter.jpg";
import Alert from 'react-bootstrap/Alert'

function NewsLetter() {
  
  const handleClick = () => {
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    ));
  }

  return (
    <>   
      <div className="detailscontainer">

        <div className="innercontainer">
          <div className="header">Hey, wait...</div>
          <div className="subheader">Subscribe to our newsletter!</div>
          <div className="textp">
            You will never miss our podcasts and latest news.
          </div>
          <div className="formgroup">
            <input className="emailinput" type="text" placeholder="example@email.com" />
            {/* <button className="btnsubscribe" type="submit">Subscribe</button> */}
            <button className="btnsubscribe" type="submit" onClick={handleClick}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsLetter;