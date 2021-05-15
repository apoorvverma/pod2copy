import React from "react";

interface sbb {
	subButtonType: string;
}

export const Subbutton: React.FC<sbb> = ({ subButtonType }) => {
	return (
		<>
			<div style={{ display: "inline" }} id="forgot">
				{subButtonType === "forgot" ? "Forgot Password ?" : "Sign Up"}
			</div>
		</>
	);
};
