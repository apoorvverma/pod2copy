import React from "react";
import "./input.scss";

interface IProps {
	value: string;
	placeholder?: string;
	type?: string;
	onChange: Function;
	name?: string;
}

const DProps = {
	value: "",
	placeholder: "",
	type: "text",
};

const Input: React.FC<IProps> = ({
	value,
	placeholder,
	type,
	onChange,
	name,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		onChange(value);
	};

	return (
		<input
			name={name}
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
