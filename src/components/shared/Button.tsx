import React from "react";
import "./Button.css";
// interface for button attributes
interface buttonProps {
  btn_icon?: any;
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
}
// shared button className
const sharedBtn: string = "shared--btn";
const Button: React.FC<buttonProps> = ({ btn_icon, label, type }) => {
  return (
    <>
      <button className={`${sharedBtn} ${label}`} type={type}>
        {btn_icon ? <img src={btn_icon} alt="social_buttons" /> : null}
        {label}
      </button>
    </>
  );
};

export default Button;
