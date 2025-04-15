import "./style.css";
import { giftsetList } from '../../../helper/productList';
import Icon from "../../Icon";
import Btn from "../../Btn";
import React, { useRef, useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomContext } from "../../../utils/Context";
import clsx from "clsx";


const SwiperGiftset = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  const {addBasket} = useContext(CustomContext);

  const handleButtonClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, []);

  return (
  
      <div className="slider-container">
       <div className="pagination-buttons">
           {giftsetList.map((_, index) => (
             <button 
             key={index}
             className={`pagination-button ${index === activeIndex ? 'active' : ''}`}
               onClick={() => handleButtonClick(index)}
             >
               {index +1}
             </button>
           ))}
       </div>

      <Swiper ref={swiperRef} slidesPerView={1} className="swiperGift" speed={0}>
           {giftsetList.map((product, index) => (         
             <SwiperSlide className="swiper-slide"
             key= {index}
             >
               <div className="gift__card">
                 <div className="card__left-content">
                   <img className={clsx("gift__card__img", product.mask || '' )} src={product.img}
                     alt="Coffe set" />
                 </div>
                 <div className="card__rigth-content">
                   <div>
                     <p className="card__price">{product.price}</p>
                     <h3 className="card__title title-3">{product.title}</h3>
                     <p className="card__text">{product.desc}
                     </p>

                     <div className="card__desc">
                       <div className="left__block">
                         <Icon width='40' height='40' name='bean' />
                         <div className="text__block">
                           <p>Loại hạt</p>
                           <p className="card__text-width">{product.type}</p>
                         </div>
                       </div>
                       <div className="right__block">
                         <Icon name='mountain' height='40' width='40' />
                         <div className="text__block">
                           <p>Độ cao</p>
                           <p className="card__text-width">{product.height}</p>
                         </div>
                       </div>
                     </div>

                   </div>
                   <div className="link__container">
                     <Btn className="btn_buy" type='button' title='MUA NGAY' onClick={() => addBasket(product)}/>
                     <a className="card__link-more">CHI TIẾT</a>
                   </div>
                 </div>
               </div>  
              </SwiperSlide>
           ))}
      </Swiper>
    </div>
  );
};

export default SwiperGiftset;
