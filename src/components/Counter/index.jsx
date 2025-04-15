import "./style.css";
import decSvg from "./icon-down.svg";
import incSvg from "./icon-up.svg";
import { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Counter = ({ count, changeValue, id }) => {

  const {plusOneBasket, minusOneBasket} = useContext(CustomContext)

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value === '') {
      changeValue(id, 1);
      return;
    }
    value = parseInt(value);
   
    value = Math.max(1, Math.min(100, value));
    changeValue(id, value);
  };


  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={count}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (['e', 'E', '+', '-'].includes(e.key)) {
              e.preventDefault();
            }
          }}
        />
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            plusOneBasket(id);
          }}
        >
          <img src={incSvg} alt="Increase" />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            minusOneBasket(id);
          }}
        >
          <img src={decSvg} alt="Decrease" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
