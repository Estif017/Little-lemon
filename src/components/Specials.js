import React from 'react';
import { specials } from '../utils/specials';
import delivery from '../assets/delivery.svg'

const Specials = () => {
	return (
		<section className='specials'>
			<div className='special-header'>
				<h1>Specials</h1>
				<button>Online Menu</button>
			</div>

			<div className='special-menus'>
				{specials.map((menu) => (
					<div className='menu'>
						<img src={menu.img} alt={menu.name} className='menu-img' />
						<div className='title-price'>
							<p className='menu-title'>{menu.name}</p>
							<p className='menu-price'>${menu.price}</p>
						</div>
						<p className='menu-description'>{menu.description}</p>
            <div className="delivery">
              <p>Order a delivery</p>
              <img src={delivery} alt="delivery icon" />
            </div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Specials;
