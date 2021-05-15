import React from "react";
import "./Navbar.scss";
import Button from "./../shared/Button";
import { Link } from "react-router-dom";
import IconRightArrow from "./../../assets/Icon-metro-arrow-right.svg";

const Navbar: React.FC = () => {
	return (
		<div className="nav-container">
			<div className="logo">Hustlers Village</div>
			<div className="nav-elements">
				<Link to="/">
					<p>Home</p>
				</Link>
				<p>How It Works?</p>
				<Link to="/career">
					<p>Contact</p>
				</Link>

				{/* <button className="Login">Log in</button>
                <button  className="Register">Register 🡪</button> */}
				<Link to="/login">
					<Button
						buttonStyle="btn--secondary"
						buttonSize="btn--medium"
						onClick={(e) => e.preventDefault}
					>
						Log in
					</Button>
				</Link>

				<Link to="/signup">
					<Button
						icon={IconRightArrow}
						buttonStyle="btn--primary"
						buttonSize="btn--medium"
						onClick={(e) => e.preventDefault}
					>
						Register
					</Button>
				</Link>
			</div>
			<span className="burger">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</span>
		</div>
	);
};

export default Navbar;
