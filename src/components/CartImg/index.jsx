import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import "./style.css";
import { CustomContext } from "../../utils/Context";
import { useContext, useState } from "react";
import BasketZero from "../BasketZero";

const CartImg = () => {
  const { total } = useContext(CustomContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="btn-cart nav__btn"
        onClick={() => {
          if (total.count) {
            navigate("/cart");
          } else {
            setShow(true);
          }
        }}
      >
        <Icon className="icon-cart" name="cart" />
        <span className="nav__num">{total.count}</span>
      </button>
      <BasketZero show={show} setShow={setShow} />
    </div>
  );
};

export default CartImg;
