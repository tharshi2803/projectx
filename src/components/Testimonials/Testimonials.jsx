import React, { useRef, useState } from "react";
import '../Testimonials/testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

import image1 from "../images/user1.jpg";
import image2 from "../images/user2.jpg";
import image3 from "../images/user3.jpg";

// install Swiper modules
SwiperCore.use([Pagination]);

function Testimonials() {
	return (
		<>
			<br />
			<div className="testimonial-heading">Testimonials</div> <br /><br />
			{/*script added in index.html*/}
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div id="testimonial-slider" class="owl-carousel">
							<div class="testimonial">
								<div class="pic">
									<img src={image1}/>
								</div>
								<p class="description">
								I really found my career path with the help of this webiste and it's amzing to 
								provide all the details that i expect to know from someone else.
								</p>
								<h3 class="title">Lakshan Perera</h3>
								<small class="post">- Archietect</small>
							</div>

							<div class="testimonial">
								<div class="pic">
									<img src={image2} />
								</div>
								<p class="description">
								I really found my career path with the help of this webiste and it's amzing to 
								provide all the details that i expect to know from someone else.
								</p>
								<h3 class="title">Malaika Silva</h3>
								<small class="post">- Engineer </small>
							</div>

							<div class="testimonial">
								<div class="pic">
									<img src={image3} />
								</div>
								<p class="description">
								I really found my career path with the help of this webiste and it's amzing to 
								provide all the details that i expect to know from someone else.
								</p>
								<h3 class="title">Arthika Sivanathan</h3>
								<small class="post">- Graphic Designer</small>
							</div>

							
						</div>
					</div>
				</div>
			</div>
		
		</>
	)
}

export default Testimonials;