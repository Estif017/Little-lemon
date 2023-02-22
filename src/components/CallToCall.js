import React from 'react';
import serverImg from '../assets/restauranfood.jpg';

const CallToCall = () => {
	return (
		<section className='hero'>
			<div className='article'>
				<h1 className='title'>Little Lemon</h1>
				<p className='subtitle'>Chicago</p>
				<p className='description'>
					We are a Family owned Mediterranean Restaurant Focused on traditional
					recipies served with a modern twist.
				</p>
				<button className='reserve-table'>Reserve Table</button>
			</div>
			<div className='img-container'>
				<img src={serverImg} alt='server' className='server-img' />
			</div>
		</section>
	);
};

export default CallToCall;
