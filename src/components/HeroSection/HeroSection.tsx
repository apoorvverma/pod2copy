import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { IconRightArrow } from "./../shared/Icons";
import "./HeroSection.scss";

interface HSprops {
	// username: any;
}

const HeroSection: React.FC = () => {
	// const [username, setUsername] = useState<HSprops["username"]>(
	// 	"hustlersvillage.com/"
	// );

	// const history = useHistory();

	// // hancleClick
	// const handleClick = (): void => {
	// 	console.log(username);
	// 	history.push("/select-role");
	// };

	// handleChange
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		// setUsername({
		// 	username: `hustlersvillage.com/${e.target.value}`,
		// });
	};

	return (
		<div className="hero">
			<h1 className="hero-heading">
				let your <span>hustle</span> speak for itself.
			</h1>
			<div className="hero-form">
				<Input
					value=""
					placeholder="your-name"
					type="text"
					onChange={handleChange}
				/>

				<Button
					icon={<IconRightArrow />}
					buttonStyle="btn--blue"
					buttonSize="btn--medium"
					onClick={(e) => e.preventDefault}
				>
					Start Hustling
				</Button>
			</div>
			<p className="hero-text">It’s free, and takes less than a minute</p>
		</div>
	);
};

export default HeroSection;
