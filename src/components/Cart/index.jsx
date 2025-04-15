import React, { useEffect, useState } from "react";
import CartFooter from "../CartFooter";
import "./style.css";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";

import Counter from "../Counter";
import cross from "../../assets/svg/cross.svg";


const Cart = () => {
  const { basket, delBasket, setBasket, total} = useContext(CustomContext);
  const priceFormatter = new Intl.NumberFormat();


  const changeValue = (id, value) => {   
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

return (
    <div className="cart">
      <div className="container">
      <header className="cart__header">
        <div className="container">
          <h1 className="title-1">Your Cart</h1>
        </div>
      </header>

      <div className="cart__body">
        <div className="container">
          <ul className="cart__list">
            {basket.map((item) => (
              <li key={item.id} className="cart__item">
                <div className="product">
                  <div className="product__img">
                    <img src={item.img} alt="coffe" />
                  </div>
                  <div className="product__title">{item.title}</div>
                  <div className="product__count">
                    <Counter
                      count={item.count}
                      id={item.id}
                      changeValue={changeValue}
                    />
                  </div>
                  <div className="product__price">
                    {priceFormatter.format(item.price * item.count)} đ.
                  </div>
                  <div className="product__controls">
                    <button
                      type="button"
                      onClick={() => {
                        delBasket(item.id);
                      }}
                    >
                      <img src={cross} alt="Delete" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <CartFooter total={total} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
