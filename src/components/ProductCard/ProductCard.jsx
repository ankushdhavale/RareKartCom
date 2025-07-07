import React from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { useCart } from "../../context/CartContext";

const ProductsCard = ({ product }) => {
	const { cart, cartDispatch } = useCart();
	console.log(cart);
	
	const onCartClick = (product)=>{
		cartDispatch({
			type: "ADD_TO_CART",
			payload:{product},
		})
	}
	return (
		<div>
			<div className='card card-vertical d-flex direction-column relative shadow'>
				<div className='card-image-container'>
					<img className='card-image' src={product?.images[0]} alt='shoes' />
				</div>
				<div className='card-details'>
					<div className='card-title'>{product?.title}</div>
					<div className='card-description'>
						<p className='card-des'>{product?.category?.name}</p>
						<p className='card-price'>
							Rs. <span>{product.price }</span>
						</p>
					</div>
					<div className='cta-btn'>
						<button onClick={()=>onCartClick(product)} className='button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin'>
							<PiShoppingCartThin/>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsCard;
