import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookingPage from '../pages/BookingPage';
import Homepage from '../pages/Homepage';

const Main = () => {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/booking' element={<BookingPage />}></Route>
			</Routes>
			{/* <Homepage /> */}
		</main>
	);
};

export default Main;
