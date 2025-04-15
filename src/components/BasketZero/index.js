import Btn from "../Btn";
import Icon from "../Icon";
import cross from '../../assets/svg/cross.svg';
import './style.css';

const BasketZero = ({show, setShow}) => {    
  
    const exitBasket = (e) => {
        if (e.target.classList.contains('basketZero')) {
            setShow(false);
        }
    }

    return ( 
        <div onClick={exitBasket} style={{display:show ? 'flex' : 'none'}} className="basketZero">
            <div className="basketZero__block">
                <Icon width={50} height={50} name="cart" className='baskerZero__icon' />
                <h2 className="title-3"> Your Cart is Empty </h2>
                <p> Add something to make you happy :) </p>
                <Btn type='button' onClick={()=> setShow(false)} title="Continue shopping" className='baskerZero__btn' />
                <span onClick={()=> setShow(false)}>
                    <img src={cross} alt="Close" className="basketZero__exit" />
                </span>
            </div>
        </div>
     );
}
 
export default BasketZero;