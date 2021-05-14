import React from "react";

interface pqr {
  labeltype: string
}

export const Label:React.FC <pqr> = ({ labeltype }) => {
  return (
    <div
      className={
        labeltype === "head"
          ? "log"
          : labeltype === "email"
          ? "input_title"
          : labeltype === "pass"
          ? "input_title"
          : " "
      }
    >
      {labeltype === "head"
        ? "Log in to your Account"
        : labeltype === "email"
        ? "Email"
        : labeltype === "pass"
        ? "Password"
        : "no"}
    </div>
  );
}

//
