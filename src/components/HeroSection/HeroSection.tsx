import React from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import IconRightArrow from "./../../assets/Icon-metro-arrow-right.svg";
import "./HeroSection.scss";

interface HSprops {
	username: string;
}

const HeroSection: React.FC = () => {
	const [username, setUsername] = React.useState<HSprops>({
		username: "",
	});

	const url: string = "hustlersvillage.com/";

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const userData = username.username;
		console.log(`${url}${userData}`);
	};

	// handleChange
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {};

	return (
		<div className="hero">
			<h1 className="hero-heading">
				let your <span>hustle</span> speak for itself.
			</h1>
			<div className="hero-form">
				<form className="hero-form-two" onSubmit={handleSubmit}>
					<Input
						value=""
						placeholder="your-name"
						type="text"
						state={username}
						name="username"
						setState={setUsername}
					/>

					<Button
						icon={IconRightArrow}
						buttonStyle="btn--blue"
						buttonSize="btn--medium"
						type="submit"
						onClick={undefined}
					>
						Start Hustling
					</Button>
				</form>
			</div>
			<p className="hero-text">It’s free, and takes less than a minute</p>
		</div>
	);
};

export default HeroSection;
