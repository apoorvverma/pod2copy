import React from "react";
import Google from "../../images/Google.svg";
import Github from "../../images/github.svg";
import Dribbble from "../../images/dribbble.svg";
import Arrow from "../../images/arrow-right.svg";

interface xyz 
{
  buttontype: string
}

export const Button:React.FC <xyz> = ({ buttontype }) => {
  return (
    <>
      <button
        className={buttontype === "Arrow" ? "login" : "social"}
        id={
          buttontype === "Google"
            ? "google"
            : buttontype === "Github"
            ? "github"
            : buttontype === "Dribbble"
            ? "dribbble"
            : " "
        }
      >
        <img
          src={
            buttontype === "Google"
              ? Google
              : buttontype === "Github"
              ? Github
              : buttontype === "Dribbble"
              ? Dribbble
              : " "
          }
          alt=""
        />
        {buttontype === "Google"
          ? "Google"
          : buttontype === "Github"
          ? "Github"
          : buttontype === "Dribbble"
          ? "Dribbble"
          : buttontype === "Arrow"
          ? "Take me to Village"
          : ""}
        <img src={buttontype === "Arrow" ? Arrow : ""} id="arrow" alt="" />
      </button>
    </>
  );
}
