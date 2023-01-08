import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
	const addedItems = useSelector((state)=> state.cart);
	return (
		<div className='navBar'>
			<span>REDUX STORE</span>
			<Link className='navLink'  to="/">Home</Link>
			<Link className='navLink' to="/cart">Cart</Link>
			<span className='cartCount'>Cart Items: {addedItems.length}</span>
		</div>
	)
}

export default Nav;