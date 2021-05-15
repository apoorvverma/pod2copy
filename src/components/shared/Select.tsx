import React from 'react';

interface IProps {
    value?: string,
    placeholder?: string,
    data: [{}],
    onChange: Function
    }

    const DProps = {
        value: '',
        placeholder: '',
    }
   
const Select :React.FC<IProps> = ({value, data, placeholder, onChange}) => {

    const handleChange = (event:React.ChangeEvent) => {
        // const {value} = event.target;
        // onChange(value);
    };

    return (
            <select
                value={value}
                className="input"
                onChange={handleChange}>
                <option value="">{placeholder}</option>
                {/* {data.map((item:string, key:number) => (
                    <option
                        key={key}
                        value={item.value}
                        >
                         {item.label}
                    </option>
                ))} */}
            </select>
    )
};
Select.defaultProps=DProps;

export default Select;