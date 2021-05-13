import React from 'react'
import "./Button.css"
interface buttonProps{
    btn_icon?:any,
    label: string,
}

const Button: React.FC<buttonProps> = ({ btn_icon, label}) => {
    return (
        <>
            <button className = {label} >
                {btn_icon?<img src={btn_icon} alt="social_buttons"/>:null}
                {label}</button>
        </>
    )
}

export default Button
