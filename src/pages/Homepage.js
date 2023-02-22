import React from 'react';
import CallToCall from '../components/CallToCall';
import Chicago from '../components/Chicago';
import CustomersSay from '../components/CustomersSay';
import Specials from '../components/Specials';

const Homepage = () => {
	return (
		<>
			<CallToCall />
			<Specials />
			<CustomersSay />
			<Chicago/>
		</>
	);
};

export default Homepage;
