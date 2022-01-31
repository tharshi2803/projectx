import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Footer/footer.css';
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (

    <div class="d-flex flex-column">

      <div class="footer-body">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <p className="company-name"> Excel Career</p><br />
              <p className="company-description">We are excellence in providing educational career guidance for students in sriLanka.</p>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <ul class="list-unstyled mb-0 ul-list">
                <li class="mb-2"><a href="#" class="text-muted">Home</a></li>
                <li class="mb-2"><a href="#" class="text-muted">Programs</a></li>
                <li class="mb-2"><a href="#" class="text-muted">Features</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">

              <ul class="list-unstyled mb-0 ul-list">

                <div className="footer-contact">Contact Us</div>
                <li class="mb-2"><a href="#" class="text-muted">info@gmail.com</a></li>
                <li class="mb-2"><a href="#" class="text-muted">1234567890</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-icons">Follow us</div>
              <ul class="list-inline mt-4">
              <i class="fa fa-facebook"></i>
                {/* <li class="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faTwitter} size="2x" color="#55ACEE" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" color="#3B5998" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" color="#cd486b" /></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter" ><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" /></a></li> */}
              </ul>
            </div>

          </div>
        </div>




      </div>


    </div>


  );
}
export default Footer;