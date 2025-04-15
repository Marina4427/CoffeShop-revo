import './style.css';

const CartFooter = ({total}) => {
	const { count, price } = total;
	const priceFormatter = new Intl.NumberFormat();
	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>{count} pcs. </div>
			<div className='cart-footer__price'>
				{priceFormatter.format(price)} đ.
			</div>
		</footer>
	);
};

export default CartFooter;