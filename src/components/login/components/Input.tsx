import React from 'react';
import './input.scss'
import {Subbutton} from './../Subbutton'

interface IProps {
    value: string,
    placeholder?: string,
    type?: string,
    onChange:Function,
    label?: string
    subButton?:boolean
    }

    const DProps = {
        value: '',
        placeholder: '',
        type: 'text',
        subButton:false
    }
    


const Input :React.FC<IProps> = ({value, placeholder, type, onChange,label ,subButton }) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        onChange(value);
    };

    return(
        <div className="input--group">
            <div className="pass--label">
                <div className="input--label">{label}</div>
                {subButton && (label==="password" ? <Subbutton subButtonType="forgot"/> : '')}
            </div> 
            <input
                type={type}
                value={value}
                className='input'
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}
Input.defaultProps=DProps;

export default Input;
