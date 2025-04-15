import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
 import "./style.css";

import { productList } from "../../../helper/productList";
import Btn from "../../Btn";

import { CustomContext } from "../../../utils/Context";

const SwiperProduct = () => {

  const {addBasket} = useContext(CustomContext);

  // Группируем продукты по 2 в слайде
  const getGroupedProducts = (products, minSlides = 4) => {
    let grouped = products.reduce((acc, item, index) => {
      if (index % 2 === 0) acc.push([item]);
      else acc[acc.length - 1].push(item);
      return acc;
    }, []);

    // Если слайдов меньше 4, дублируем существующие пары
    while (grouped.length < minSlides) {
      grouped.push(...grouped.slice(0, minSlides - grouped.length));
    }
    return grouped;
  };

  const groupedProducts = getGroupedProducts(productList);

  return (
    <div className="slick__list-product">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2.5}
        navigation={{
          nextEl: ".b-next",
          prevEl: null,
        }}
        loop
        speed="1300"
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        className="swiper__product"
      >
        <div className="overlay"></div>

        {groupedProducts.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="sliderCard">
              {group.map((product) => (
                <div key={product.id} className="swiper__card">
                  <div className="img-container">
                    <img
                      className="img__product"
                      src={product.img}
                      alt={product.title}
                    />
                  </div>
                  <div className="card__desc">
                    <p className="card__price">{product.price}</p>
                    <h3 className="card__title title-3">{product.title}</h3>
                    <p className="card__text">{product.desc}</p>
                    <div className="link__container">
                      <Btn title="MUA NGAY" type="button" className="btn_buy" onClick={() => addBasket(product)}>
                        {" "}
                      </Btn>
                      <a className="card__link-more">CHI TIẾT</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="b-next"></button>
    </div>
  );
};

export default SwiperProduct;
