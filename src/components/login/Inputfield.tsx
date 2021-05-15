import React from "react";

interface abc {
  inputFieldType: string;
//   subButtonType: string;
}

export const Inputtypefeild: React.FC<abc> = ({ inputFieldType}) => {
  return (
    <>
      <input
        className="field"
        type="text"
        placeholder={
          inputFieldType === "mail"
            ? "Enter your mail"
            : inputFieldType === "password"
            ? "Enter your password"
            : " "
            //  subButtonType ==="forgot" ? 'Forgot Password ?' :  'Sign Up'
        }
      />
      {/* <div style={{display:"inline"}} >{}</div> */}
    </>
  );
};
