import React,{useState} from 'react';
import './App.css';

import Button from './components/shared/Button';
import Input from './components/shared/Input';
import Select from './components/shared/Select';
import {IconRightArrow,IconDribbble,IconGoogle} from './components/shared/Icons'


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
      <Button 
      buttonStyle="btn--secondary" 
      buttonSize="btn--medium" 
      onClick={e=>e.preventDefault}
      >
        Log in
      </Button>
      <Button 
      icon={<IconRightArrow/>} 
      buttonStyle="btn--primary" 
      buttonSize="btn--medium" 
      onClick={e=>e.preventDefault}
      >
        Register
      </Button>
      <Button 
      icon={<IconDribbble/>} 
      iconAlign="btn--iconleft" 
      buttonStyle="btn--dribbble" 
      buttonSize="btn--medium"
       onClick={e=>e.preventDefault}
       >
         Dribbble
      </Button>
      <Button 
      icon={<IconGoogle/>} 
      iconAlign="btn--iconleft" 
      buttonStyle="btn--google" 
      buttonSize="btn--medium" 
      onClick={e=>e.preventDefault}
      >
        Google
      </Button>
      <Button 
      icon={<IconRightArrow/>} 
      buttonStyle="btn--blue" 
      buttonSize="btn--medium" 
      onClick={e=>e.preventDefault}
      >
        Start Hustling
      </Button><br/>
      <Button 
      icon={<IconRightArrow/>} 
      buttonStyle="btn--primary" 
      buttonSize="btn--large" 
      onClick={e=>e.preventDefault}
      >
        Take Me To The Village
      </Button><br/>
      <Input 
        value={text}
        type='text'
        placeholder='Enter text here...'
        onChange={handleChange('text')}
        />
        <Select data={[{}]} placeholder="select" onChange={()=>console.log("handled change")}/>
    </div>
  );
}

export default App;
