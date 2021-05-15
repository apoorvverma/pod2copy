import React,{useState} from 'react';
import './App.css';

import Career from './components/Career'


function App() {
  const [text,setText]=useState('')





  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Career/>
     </div>
  );
}

export default App;
