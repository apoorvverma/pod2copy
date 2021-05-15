import React from "react";
import "./App.css";
import {
	Switch,
	Route,
	BrowserRouter as Router,
	BrowserRouter,
} from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Career from "./components/Career/Career";
import Signup from "./components/Signup/Signup";

function App() {
	return (
		<div className="App">
			{/* <Signup /> */}
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" component={HeroSection} />
					<Route path="/login" component={HeroSection} />
					<Route path="/signup" component={Signup} />
					<Route exact path="/career" component={Career} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
