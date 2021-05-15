import React from "react";

import "./btn.scss";

interface IProps {
	buttonStyle: string;
	buttonSize: string;
	iconAlign?: string;
	icon?: any;
	children?: React.ReactNode;
	type?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DProps = {
	buttonStyle: "btn--primary",
	buttonSize: "btn--medium",
	onClick: undefined,
};

const Button: React.FC<IProps> = ({
	buttonSize,
	buttonStyle,
	children,
	icon,
	iconAlign,
	onClick,
}) => {
	const STYLES: string[] = [
		"btn--primary",
		"btn--secondary",
		"btn--blue",
		"btn--dribbble",
		"btn--google",
	];

	const SIZES: string[] = ["btn--medium", "btn--large"];

	const checkbuttonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			onClick={() => onClick}
			className={` btn ${checkbuttonStyle} ${checkbuttonSize} ${
				iconAlign ? iconAlign : "btn--iconright"
			}`}
		>
			{icon ? <img src={icon} alt="Social button" /> : null}
			{children}
		</button>
	);
};
Button.defaultProps = DProps;

export default Button;
