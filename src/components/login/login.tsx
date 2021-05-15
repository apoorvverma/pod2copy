import React from "react";
import Button from "./_components/Button";
import Input from "./_components/Input";
import { Label } from "./Label";
import { Subbutton } from "./Subbutton";
import { IconRightArrow, IconDribbble, IconGoogle } from "./_components/Icons";
import Github from "../../images/github.svg";
import "./login.scss";

function Login() {
	return (
		<div className="login-container">
			<div className="login-card">
				<h2 className="signup-header">
					<Label labeltype="head" />
				</h2>
				<div className="social-btns">
					<Button
						icon={<IconGoogle />}
						iconAlign="btn--iconleft"
						buttonStyle="btn--google"
						buttonSize="btn--medium"
						onClick={(e) => e.preventDefault}
					>
						Google
					</Button>

					<Button
						icon={
							<img
								src={Github}
								alt=""
								style={{ width: "14px", height: "14px" }}
							/>
						}
						iconAlign="btn--iconleft"
						buttonStyle="btn--github"
						buttonSize="btn--medium"
						onClick={(e) => e.preventDefault}
					>
						Github
					</Button>
					<Button
						icon={<IconDribbble />}
						iconAlign="btn--iconleft"
						buttonStyle="btn--dribbble"
						buttonSize="btn--medium"
						onClick={(e) => e.preventDefault}
					>
						Dribbble
					</Button>
				</div>
				<div className="option">
					<hr />
					or login with email
					<hr />
				</div>
				<div className="registraton-from">
					<form action="">
						<Input
							value=""
							type="text"
							placeholder="Enter text here..."
							label="email"
							onChange={(e: any) => e.preventDefalut()}
						/>

						<Input
							label="password"
							value=""
							type="text"
							subButton={true}
							placeholder="Enter text here..."
							onChange={(e: any) => e.preventDefalut()}
						/>
						{/* <Subbutton subButtonType='forgot' />  */}

						<Button
							icon={<IconRightArrow />}
							buttonStyle="btn--primary"
							buttonSize="btn--large"
							onClick={(e) => e.preventDefault}
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
