import React from "react";
import "./style.css";
import CartImg from "../CartImg";


const NavBar = ({ onClose }) => {
  //плавный переход по ссылке
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      console.error(`Элемент с ID "${targetId}" не найден.`);
    }
    onClose();
  };

  return (
    <nav className="nav">
      <CartImg />
      <div className="nav__content">
        <h2 className="nav__title">TRANG CHỦ</h2>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              className="nav__item-link"
              onClick={handleNavClick}
              href="#coffe"
            >
              COFFEE
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              onClick={handleNavClick}
              href="#choose"
            >
              PHIN MẠ MÀU
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              onClick={handleNavClick}
              href="#combo"
            >
              COMBO PHIN PHÊ
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__item-link"
              onClick={handleNavClick}
              href="#giftset"
            >
              GIFTSET
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link" onClick={handleNavClick} href="#home">
              LIÊN HỆ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
