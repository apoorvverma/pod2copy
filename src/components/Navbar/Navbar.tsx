import React from "react";
import "./Navbar.scss";
import Button from "./../shared/Button";
import { IconRightArrow } from "./../shared/Icons";

const Navbar: React.FC = () => {
	return (
		<div className="nav-container">
			<div className="logo">Hustlers Village</div>
			<div className="nav-elements">
				<p>Home</p>
				<p>How It Works?</p>
				<p>Contact</p>
				{/* <button className="Login">Log in</button>
                <button  className="Register">Register 🡪</button> */}
				<Button
					buttonStyle="btn--secondary"
					buttonSize="btn--medium"
					onClick={(e) => e.preventDefault}
				>
					Log in
				</Button>
				<Button
					// icon={<IconRightArrow/>}
					buttonStyle="btn--primary"
					buttonSize="btn--medium"
					onClick={(e) => e.preventDefault}
				>
					Register 🡪
				</Button>
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
