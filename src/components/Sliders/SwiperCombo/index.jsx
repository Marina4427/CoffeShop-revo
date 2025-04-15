import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./style.css";
import { comboList } from "../../../helper/productList";
import Btn from "../../Btn";
import { CustomContext } from "../../../utils/Context";

const SwiperCombo = () => {

  const {addBasket} = useContext(CustomContext);

  return (
    <div className="slick__list-combo">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={3.8}
        navigation={{
          nextEl: ".b-next",
          prevEl: null,
        }}
        loop
        className="swiper__combo"
      >
        {comboList.map((product, id) => (
          <SwiperSlide key={id} className="slider-card">
            <div key={product.id} className="swiper__card">
              <div className="img-container">
                <img
                  className="img__product"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <div className="card__desc">
                <p className="card__price">{product.price} <span className="card__old-price"> {product.oldPrice}</span></p>
                <h3 className="card__title title-3">{product.title}</h3>
                <p className="card__text">{product.desc}</p>
                <div className="link__container">
                  <Btn
                    type = 'button'
                    title="MUA NGAY"
                    className="btn_buy"
                    onClick={() => addBasket(product)}
                  >
                    {" "}
                  </Btn>
                  <a className="card__link-more">CHI TIẾT</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="overlay"></div>
      </Swiper>
      <button className="b-next"></button>
    </div>
  );
};

export default SwiperCombo;
