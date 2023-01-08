import React, { useEffect } from 'react';
import { add } from '../store/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice.js';
import { STATUSES } from '../store/productSlice.js';

function Products() {
	const dispatch = useDispatch();
	const {data: products, status} = useSelector((state)=> state.product);
	// const [products, setProducts] = useState([]);

	useEffect(()=>{
		dispatch(fetchProducts());
		// const fetchProducts = async () => {
		// 	const res = await fetch('https://fakestoreapi.com/products');
		// 	const data = await res.json();
		// 	console.log(data);
		// 	setProducts(data);
		// }
		// fetchProducts();
	}, []);

	const handleAdd = (product) => {
		dispatch(add(product));
	}

	if (status === STATUSES.LOADING){
		return <h2>Loading...</h2>
	}
	
	if (status === STATUSES.ERROR){
		return <h2>Something went wrong!</h2>
	}

	return (
		<div className='productsWrapper'>
			{
				products.map(product => (
					<div className='card' key={product.id}>
						<img src={product.image} alt="productimg" />
						<h4 className=''>{product.title}</h4>
						<h5 className=''>{product.price}</h5>
						<button onClick={()=> handleAdd(product)} className='btn'>Add to Cart</button>
					</div>
				))
			}

		</div>
	)
}

export default Products;