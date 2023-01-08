import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {
	const products = useSelector((state)=> state.cart);
	const dispatch = useDispatch();
	
	const removeItem = (productId) => {
		dispatch(remove(productId));
	}
	return (
		<div>
			Here I am
			<h3>Cart</h3>
			<div className='cartWrapper'>
				{
					products.map((product)=> (
						<div className='cartCard' key={product.id}>  
							<img src={product.image} alt="productImage" />
							<h5>{product.title}</h5>
							<h5>{product.price}</h5>
							<button onClick={()=> removeItem(product.id)} className='btn'>Remove</button>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Cart;