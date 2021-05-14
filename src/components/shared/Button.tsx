import React from "react";
import "./Button.css";
interface buttonProps {
  btn_icon?: any;
  label: string;
}
const sharedBtn: string = "shared--btn";

const Button: React.FC<buttonProps> = ({ btn_icon, label }) => {
  return (
    <>
      <button className={`${sharedBtn} ${label}`}>
        {btn_icon ? <img src={btn_icon} alt="social_buttons" /> : null}
        {label}
      </button>
    </>
  );
};

export default Button;
