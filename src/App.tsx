import React, { useState } from "react";
import "./App.css";
import Signup from "./Sections/Signup/Signup";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
