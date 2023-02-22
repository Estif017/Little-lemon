import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#menu'>Menu</a>
				</li>
				<li>
					<a href='#reservations'>Reservations</a>
				</li>
				<li>
					<a href='#online-order'>Online order</a>
				</li>
				<li>
					<Link to={'/booking'}>Booking</Link>
				</li>
				<li>
					<a href='#login'>Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
