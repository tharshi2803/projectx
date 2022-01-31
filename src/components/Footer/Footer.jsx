import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Footer/footer.css';
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img src={logo} height="60" width="100" alt="logo" />
            <h6>Excel Career</h6>
            <p class="text-justify">We are pioneer in providing guidance to choose educational career path for srilankan students.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <Link to="/"><li className="footer-list">Home</li></Link>
              <Link to="/programs"><li className="footer-list">Programs</li></Link>
              <Link to="/features"><li className="footer-list">Features</li></Link>
              <Link to="/contact"><li className="footer-list">Contact</li></Link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Connect with us</h6>
            <ul class="footer-links">
              <li>0123456789</li>
              <li>info@gmail.com</li>
            </ul>
          </div>

        </div>
        <br />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy;  All Rights Reserved by
              <a href="#">Excel career</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


  );
}
export default Footer;