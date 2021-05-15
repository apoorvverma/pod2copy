import React from "react";
import google from "../../assets/Google.svg";
import dribbble from "../../assets/dribbble.svg";
import github from "../../assets/github.svg";
import btnarrow from "../../assets/btnarrow.svg";
import Button from "../../components/shared/Button";
import "./Signup.scss";
import Input from "../../components/shared/Input";

// interfac for user details
interface IUser {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}

const Signup = () => {
	const googleIcon = google;
	const dribbbleIcon = dribbble;
	const githubIcon = github;
	const arrowIcon = btnarrow;
	//user info state hook
	const [signup, setSignup] = React.useState<IUser>({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	// handleInput ()=> handles input states
	// const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	setSignup({ ...signup, [name]: value });
	// };
	// handleSubmit ()=> handles form submission
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const userData = { ...signup };
		console.log(userData);
	};

	return (
		<div className="signup-container">
			<div className="signup-card">
				<h2 className="signup-header">Register To HustlersVillage</h2>
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

				<div className="division">
					<div className="div--line" />
					<p className="divide-line">or log in with email</p>
					<div className="div--line" />
				</div>
				<div className="registraton-from">
					<form action="" onSubmit={handleSubmit}>
						<div className="user-name" id="user-name">
							<Input
								value={signup.firstname}
								state={signup}
								setState={setSignup}
								placeholder="first name"
								name="firstname"
								type="text"
								label="First name"
							/>

							<Input
								value={signup.lastname}
								state={signup}
								setState={setSignup}
								placeholder="last name"
								name="lastname"
								type="text"
								label="Last name"
							/>
						</div>
						<Input
							value={signup.email}
							state={signup}
							setState={setSignup}
							placeholder="email"
							name="email"
							type="email"
							label="Email"
						/>

						<Input
							value={signup.password}
							state={signup}
							setState={setSignup}
							placeholder="password"
							name="password"
							type="password"
							label="Password"
						/>

						<Button
							buttonSize="btn--large"
							buttonStyle="btn--perimary"
							children="Take Me To The Village"
							iconAlign="btn--iconleft"
							icon={arrowIcon}
							onClick={undefined}
							type="submit"
						/>

						<div className="have-account">
							<p className="subtitles">
								Already have an account? <a href="#password"> Sign in</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
