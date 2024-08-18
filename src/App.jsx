import './App.css';
import React from 'react';
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input,setInput] = useState("")

  const addInput = value => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input){
    setInput(evaluate(input));
  } else {
    alert("Please enter values to perform calculations")
  }


  return (
    <div className="App">
     <div className="container-logo-freecodecamp">
      <img src={freeCodeCampLogo} alt="freeCodeCamp Logo" className="logo-freecodecamp" />
      </div>
      <div className="calculator-container">
        <Screen input={input}></Screen>
        <div className="row">
          <Button clicDrive={addInput}>1</Button>
          <Button clicDrive={addInput}>2</Button>
          <Button clicDrive={addInput}>3</Button>
          <Button clicDrive={addInput}>+</Button>
        </div>
        <div className="row">
          <Button clicDrive={addInput}>4</Button>
          <Button clicDrive={addInput}>5</Button>
          <Button clicDrive={addInput}>6</Button>
          <Button clicDrive={addInput}>-</Button>
        </div>
        <div className="row">
          <Button clicDrive={addInput}>7</Button>
          <Button clicDrive={addInput}>8</Button>
          <Button clicDrive={addInput}>9</Button>
          <Button clicDrive={addInput}>*</Button>
        </div>
        <div className="row">
          <Button clicDrive={calculateResult}>=</Button>
          <Button clicDrive={addInput}>0</Button>
          <Button clicDrive={addInput}>.</Button>
          <Button clicDrive={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton clearDrive ={() => setInput("")}>
              Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
