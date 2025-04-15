import React, { useEffect } from "react";
import Icon from "../Icon";
import SwiperCombo from "../Sliders/SwiperCombo";
import SwiperGiftset from "../Sliders/SwiperGiftset";
import SwiperProduct from "../Sliders/SwiperProduct";
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";


const Main = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document
      .querySelectorAll("section")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Header />
      <section className="coffe container" id="coffe" >
        <p className="section__subtitle">Your Personalized Coffee</p>
        <h2 className="section__title">COFFEE BUILD YOUR BASE</h2>
        <div className="card_container">
          <article className="card">
            <Icon className="card__image" name="shop" />
            <h3 className="card__title">Nguồn gốc</h3>
            <p className="card__text">
              Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn
              quốc tế.
            </p>
          </article>

          <article className="card">
            <Icon className="card__image" name="wight" />
            <h3 className="card__title">Chất lượng</h3>
            <p className="card__text">
              Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ
              nhân cà phê.
            </p>
          </article>

          <article className="card">
            <Icon className="card__image" name="wrap" />
            <h3 className="card__title">Các loại hạt</h3>
            <p className="card__text">
              70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green
              bean.
            </p>
          </article>

          <article className="card">
            <Icon className="card__image" name="machine" />
            <h3 className="card__title">Pha chế</h3>
            <p className="card__text">
              Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và
              nghiêm ngặt.
            </p>
          </article>
        </div>
      </section>

      <section className="choose"  id="choose" >
        <div className="container">
          <p className="section__subtitle">Your Personalized Coffee</p>
          <h2 className="section__title">COMBO PHIN PHÊ</h2>
          <SwiperProduct />
        </div>
      </section>

      <section className="giftset" id="giftset">
        <div className="container">
          <p className="section__subtitle">Best Gift For Best Friend</p>
          <h2 className="section__title">GIFTSET</h2>
          <SwiperGiftset  />
        </div>
      </section>

      <section className="combo" id="combo">
        <div className="container">
          <p className="section__subtitle">Your Personalized Coffee</p>
          <h2 className="section__title">COMBO PHIN PHÊ</h2>
          <SwiperCombo />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Main;
