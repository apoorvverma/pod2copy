import React from "react";
import "./input.scss";

interface IProps {
	value: string;
	placeholder?: string;
	type?: string;
	onChange: Function;
}

const DProps = {
	value: "",
	placeholder: "",
	type: "text",
};

const Input: React.FC<IProps> = ({ value, placeholder, type, onChange }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		onChange(value);
	};

	return (
		<input
			type={type}
			value={value}
			className="input"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};
Input.defaultProps = DProps;

export default Input;
