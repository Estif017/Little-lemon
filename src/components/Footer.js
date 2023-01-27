import React from 'react';
import Restaurant from '../assets/restauranfood.jpg';

const Footer = () => {
	return (
		<footer>
			<div className='image-container'>
				<img className='footer-img' src={Restaurant} alt='restaurant' />
			</div>
			<div className='links'>
				<section className='doormat-nav'>
					<h3>Doormat Navigation</h3>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Reservation</a>
						</li>
						<li>
							<a href='#'>Order Online</a>
						</li>
						<li>
							<a href='#'>Login</a>
						</li>
					</ul>
				</section>
        <section className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone Number</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </section>
        <section className="social-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone Number</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </section>
			</div>
		</footer>
	);
};

export default Footer;
