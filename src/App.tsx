import React,{useState} from 'react';
import './App.css';

import Button from './components/shared/Button';
import Input from './components/shared/Input';
import Select from './components/shared/Select';


function App() {
  const [text,setText]=useState('')


  const handleChange = (key:string) => (value:string) => {
   console.log(key + ":" + value)
   setText(value)
  };


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
      <Button buttonStyle="btn--secondary" buttonSize="btn--medium" onClick={e=>e.preventDefault}>Log in</Button>
      <Button buttonStyle="btn--primary" buttonSize="btn--medium" onClick={e=>e.preventDefault}>Register</Button>
      <Input 
        value={text}
        type='text'
        placeholder='Enter text here...'
        onChange={handleChange('text')}
        />
       
    </div>
  );
}

export default App;
