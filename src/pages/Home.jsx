import React from 'react'
import Products from '../componentes/Products';

function Home() {
	return (
		<div>
			<h2 className='heading'>Welcome to te Redux ToolKit store</h2>
			<section>
				<h3>Products</h3>
				<Products/>
			</section>
		</div>
	)
}

export default Home;