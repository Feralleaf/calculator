import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input.js";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (value) => {
    setText((text) => [...text, value + " "]);
  };

  const calculateInput = () => {
    const input = text.join("");
    setResult(evaluate(input));
  }

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const btnColor = "orange";

  return (
    <div className="App">
      <div className="main-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addText}/>
          <Button symbol="8" handleClick={addText}/>
          <Button symbol="9" handleClick={addText}/>
          <Button symbol="/" color={btnColor} handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addText}/>
          <Button symbol="5" handleClick={addText}/>
          <Button symbol="6" handleClick={addText}/>
          <Button symbol="*" color={btnColor} handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addText}/>
          <Button symbol="2" handleClick={addText}/>
          <Button symbol="3" handleClick={addText}/>
          <Button symbol="+" color={btnColor} handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addText}/>
          <Button symbol="." handleClick={addText}/>
          <Button symbol="=" handleClick={calculateInput}/>
          <Button symbol="-" color={btnColor} handleClick={addText}/>
        </div>
        <Button symbol="AC" color="grey" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
