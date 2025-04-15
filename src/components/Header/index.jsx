import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import NavBar from "../NavBar";
import mainImg from "../../assets/coffe_main.jpg";

import logo from "../../assets/svg/LOGO.png";
import "./style.css";
import { Context } from '../../utils/Context'; 

const Header = () => {

  const [isOpen, setIsOpen] = useState(false); // Состояние для управления бургер-меню
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const classes = useMemo(() => ["header__row-center", "coffe", "choose", "combo", "giftset"], []);

  useEffect(() => {
    // Итерация по массиву идентификаторов
    classes.forEach((className) => {
      const container = document.querySelector(`.${className}`); // Используем точку для выбора по классу
      if (container) { // Проверяем, существует ли элемент
        if (isOpen) {
          container.classList.add("blur"); // Добавляем класс blur к контейнеру
        } else {
          container.classList.remove("blur"); // Удаляем класс blur из контейнера
        }
      }
    });
    
    return () => {
      // Очистка при размонтировании: удаляем класс blur у всех элементов
      classes.forEach((className) => {
        const container = document.querySelector(`.${className}`);
        if (container) {
          container.classList.remove("blur");
        }
      });
    };
  }, [isOpen, classes]);

//окрашивание title в другой цвет
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
///

//клик вне бургер меню
  const burgerMenuRef = useRef(null);
  const navRef = useRef(null);
  
  const closeNavBar = () => {
     setIsOpen(false);
   };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target) &&
          navRef.current && !navRef.current.contains(event.target)) {
        closeNavBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerMenuRef, navRef]);
//////////


  return (
    <header className="header" id="home">
      <div className="container header__container">
        <div className="header__row-left">
          <a className="logo-link" href="#home">
            <img
              className={`header__img ${isOpen ? "open" : ""}`}
              src={logo}
              alt="logo"
            />
          </a>
          <div className="burger-menu" ref={burgerMenuRef} >
            <div
              className={`burger-icon ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
          <h1 className="title-1 header__title">
            <span className="title header__title-item animated">Your</span>
            
            <span className={`title header__title-item animated active ${showBackground ? 'background' : ''}`}>
              Personalized
            </span>
            <span className="title header__title-item animated">Coffee</span>
          </h1>
        </div>

        <div className="header__row-center">
          <img src={mainImg} alt="Coffee" className="header__img-bg" />
          <div className="header__row-center__layer"></div>
        </div>

        {/* <Context>  */}
        <div className={`header__row-right ${isOpen ? "open" : ""}`} ref={navRef} >
          <NavBar onClose={toggleMenu} />
        </div>
        {/* </Context> */}
      </div>
    </header>
  );
};

export default Header;
