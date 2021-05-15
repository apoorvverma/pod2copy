import React from "react";
import Button from "./../shared/Button";
import Input from "./../shared/Input";
import { Label } from "./Label";
import { Subbutton } from "./Subbutton";

import google from "../../assets/Google.svg";
import dribbble from "../../assets/dribbble.svg";
import github from "../../assets/github.svg";
import btnarrow from "../../assets/btnarrow.svg";
import "./login.scss";

interface IUser {
	email: string;
	password: string;
}

function Login() {
	const googleIcon = google;
	const dribbbleIcon = dribbble;
	const githubIcon = github;
	const arrowIcon = btnarrow;

	const [login, setLogin] = React.useState<IUser>({
		email: "",
		password: "",
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const userData = { ...login };
		console.log(userData);
	};

	return (
		<div className="login-container">
			<div className="login-card">
				<h2 className="signup-header">
					<Label labeltype="head" />
				</h2>
				<div className="social-btns">
					<Button
						buttonSize="btn--medium"
						buttonStyle="btn--google"
						children="Google"
						iconAlign="btn--iconleft"
						icon={googleIcon}
						onClick={undefined}
					/>
					<Button
						buttonSize="btn--medium"
						buttonStyle="btn--primary"
						children="Github"
						iconAlign="btn--iconleft"
						icon={githubIcon}
						onClick={undefined}
					/>
					<Button
						buttonSize="btn--medium"
						buttonStyle="btn--dribbble"
						children="Dribbble"
						iconAlign="btn--iconleft"
						icon={dribbbleIcon}
						onClick={undefined}
					/>
				</div>
				<div className="option">
					<hr />
					or login with email
					<hr />
				</div>
				<div className="registraton-from">
					<form action="" onSubmit={handleSubmit}>
						<Input
							value=""
							type="email"
							placeholder="Enter Email..."
							label="email"
							name="email"
							state={login}
							setState={setLogin}
						/>

						<Input
							label="password"
							value=""
							type="password"
							subButton={true}
							placeholder="Enter Password..."
							name="password"
							state={login}
							setState={setLogin}
						/>

						<Button
							icon={arrowIcon}
							buttonStyle="btn--primary"
							buttonSize="btn--large"
							onClick={undefined}
							type="submit"
						>
							Take Me To The Village
						</Button>
						<div className="note">
							Don't have an account on hustlersVilage?{" "}
							<Subbutton subButtonType="sign" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
