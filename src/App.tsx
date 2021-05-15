import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Career from "./components/Career/Career";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/login";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={HeroSection} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/career" component={Career} />
			</Switch>
		</div>
	);
}

export default App;
