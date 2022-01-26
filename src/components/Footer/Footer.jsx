import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Footer/footer.css';
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (

    <div class="d-flex flex-column">

      <footer class="body1">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              {/*<p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>*/}
              <ul class="list-inline mt-4">
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faTwitter} size="3x" color="#55ACEE" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} size="3x" color="#3B5998" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} size="3x" color="#cd486b" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faYoutube} size="3x" color="#FF0000" /></a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              {/*<h6 class="text-uppercase font-weight-bold mb-4">Product</h6>*/}
              <ul class="list-unstyled mb-0 ul-list">
                {/*<li class="mb-2"><a href="#" class="text-muted">How it works</a></li>
                  <li class="mb-2"><a href="#" class="text-muted">Benefits</a></li>*/}
                <li class="mb-2"><a href="#" class="text-muted">Features</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              {/*<h6 class="text-uppercase font-weight-bold mb-4">Support</h6>*/}
              <ul class="list-unstyled mb-0 ul-list">
                {/*<li class="mb-2"><a href="#" class="text-muted">Blog</a></li>*/}
                <li class="mb-2"><a href="#" class="text-muted">Help</a></li>
                <li class="mb-2"><a href="#" class="text-muted">FAQ</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              {/*<h6 class="text-uppercase font-weight-bold mb-4">Connect With Us....</h6>*/}
              <ul class="list-unstyled mb-0 ul-list">
                {/*<li class="borderbox"><input type="text" placeholder="Enter your name" class="form-control border-0 shadow-0" /> </li> <br/>
              <li><input type="email" placeholder="Enter your email address"  class="form-control border-0 shadow-0" /></li> 
              <div class="input-group-append">
                <button type="submit" class="btnsubmit"><FontAwesomeIcon icon={faPaperPlane} size="" color="#191970"/></button>
    </div>*/}

                <li class="mb-2"><a href="#" class="text-muted">info@gmail.com</a></li>
                <li class="mb-2"><a href="#" class="text-muted">1234567890</a></li>
              </ul>
            </div>

          </div>
        </div>




      </footer>


    </div>


  );
}
export default Footer;