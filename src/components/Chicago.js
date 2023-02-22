import React from 'react';
import restaurant from '../assets/restaurant.jpg'

const Chicago = () => {
	return (
		<section className='backstory'>
			<div className='bk-article'>
				<h1 className='bk-title'>Little Lemon</h1>
				<p className='bk-subtitle'>Chicago</p>
				<p className='bk-description'>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit.
				</p>
			</div>
      <img src={restaurant} alt="restaurant" className="bk-restaurant" />
		</section>
	);
};

export default Chicago;
