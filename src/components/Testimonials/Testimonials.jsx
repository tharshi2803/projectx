import React from 'react';
import '../Testimonials/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';



function Testimonials() {
    return(
        <section class="testimonials-section">
	<div class="container">
		<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 testimonials">
			<div class="training-title">
				<h4 class="aoe-title">Testimonials</h4>
				<div class="line"></div>
			</div>			

		<div class="col-center m-auto">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
 
				
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="img-box"><img src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg" alt="" /></div>
						<h4 class="carousel-title">Amazing Trainer!</h4>
						<div class="carousel-line"></div>

						<p class="testimonial"><span>"</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. aliquet.</p>
						<p class="overview"><b>- Paula Wilson</b></p>
						<h6 class="company-name">A</h6>
					</div>

					<div class="item carousel-item">
						<div class="img-box"><img src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg" alt="" /></div>
						<h4 class="carousel-title">Amazing Trainer!</h4>
						<div class="carousel-line"></div>

						<p class="testimonial"><span>"</span> Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. facilisis gravida odio.</p>
						<p class="overview"><b>- Antonio Moreno</b></p>
						<h6 class="company-name">B</h6>
					</div>

					<div class="item carousel-item">
						<div class="img-box"><img src="https://www.eharmony.com/dating-advice/wp-content/uploads/images/goodsmile.jpg" alt="" /></div>
						<h4 class="carousel-title">Amazing Trainer!</h4>
						<div class="carousel-line"></div>

						<p class="testimonial"><span>"</span> Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus. </p>
						<p class="overview"><b>- Michael Holz</b></p>
						<h6 class="company-name">C</h6>
					</div>

				</div>
				
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev"><span>Prev</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next"><span>Next</span>
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>

	</div>
</div>
</section>
    )
					

   }
export default Testimonials;