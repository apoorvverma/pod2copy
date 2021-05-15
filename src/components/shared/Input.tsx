import React from "react";
import "./input.scss";
import { Subbutton } from "../login/Subbutton";

interface IProps {
	value: string;
	placeholder?: string;
	type?: string;
	name?: string;
	state: any;
	setState: Function;
	label?: string;
	subButton?: boolean;
}

const DProps = {
	value: "",
	placeholder: "",
	type: "text",
	subButton: false,
};

const Input: React.FC<IProps> = ({
	value,
	placeholder,
	type,
	name,
	label,
	subButton,
	state,
	setState,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({ ...state, [name]: value });
	};

	return (
		<div className="input--group">
			{label ? (
				<div className="pass--label">
					<div className="input--label">{label}</div>
					{subButton &&
						(label === "password" ? <Subbutton subButtonType="forgot" /> : "")}
				</div>
			) : (
				""
			)}

			<input
				name={name}
				type={type}
				value={state.name}
				className="input"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
Input.defaultProps = DProps;

export default Input;
