import React from 'react';
import { testimonials } from '../utils/testimonials';

const CustomersSay = () => {
	return (
		<section className='testimonials'>
			<h1 className='testimonials-header'>Testimonials</h1>
			<div className='testimonials-cards'>
				{testimonials.map((testimonial) => (
					<div className='testimonial-card'>
						<div className='testimonial-card-header'>
							<div className='customer-img-container'>
								<img src={testimonial.img} alt='customer' />
							</div>
							<div>
								<p className='customer-name'>{testimonial.name}</p>
								<p className='customer-rating'>{testimonial.rating} stars</p>
							</div>
						</div>
						<p className='customer-review'>{testimonial.review}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default CustomersSay;
