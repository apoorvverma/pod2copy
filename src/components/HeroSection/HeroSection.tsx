import ArrowSvg from "./../../assets/Icon-metro-arrow-right.svg";
import "./HeroSection.scss";

// interface htype {}

const HeroSection: React.FC = () => {
	return (
		<div className="hero">
			<h1 className="hero-heading">
				let your <span>hustle</span> speak for itself.
			</h1>
			<div className="hero-form">
				<input
					type="text"
					className="hero-form-input"
					defaultValue="hustlersvillage.com/your-name"
				/>
				<button className="hero-form-btn">
					<span>Start Hustling</span>
					<img src={ArrowSvg} alt="This is an icon" />
				</button>
			</div>
			<p className="hero-text">It’s free, and takes less than a minute</p>
		</div>
	);
};

export default HeroSection;
