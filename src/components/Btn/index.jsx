import clsx from "clsx";
import "./style.css";

const Btn = ({ title, className, onClick }) => {
  return <button className={clsx("btn", className || "")} onClick={onClick}>{title}</button>;
};

export default Btn;
