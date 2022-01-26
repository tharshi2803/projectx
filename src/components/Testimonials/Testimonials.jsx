import React from 'react';
import '../Testimonials/testimonials.css';
import image1 from "../images/mentor.jpg";

function Testimonials(){
	return(
		<section className="testimonials">
			<div className="container">
				<h1>Testimonials</h1>
				<p className="text-center">Subscribe Easy tutorials</p>
				<div className="row">
					<div className="col-md-4 text center">
						<div className="profile">
							<img src={image1} className="user" />
							<blockquote>Like this and ask</blockquote>
							<h3>AV<span>founder</span></h3>
						</div>
					</div>

					<div className="col-md-4 text center">
						<div className="profile">
							<img src={image1} className="user" />
							<blockquote>Like this and ask</blockquote>
							<h3>AV<span>founder</span></h3>
						</div>
					</div>

					<div className="col-md-4 text center">
						<div className="profile">
							<img src={image1} className="user" />
							<blockquote>Like this and ask</blockquote>
							<h3>AV<span>founder</span></h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Testimonials;