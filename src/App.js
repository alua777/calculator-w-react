import { useState } from "react";
import "./styles.css"



function App(){
  const [str, strSet] = useState("")
  
  
function calculator(arg){
  if (arg === "="){
    var prev = document.getElementById("prev");
    prev.innerText = str;
    strSet(eval(str));
  } else if (arg === "AC"){
    strSet("");
  } else if (arg === "DEL"){
    strSet(str.slice(0, -1));
  } else {
      if (((str.slice(-1) === "+") || (str.slice(-1) === "-") || (str.slice(-1) === "/") || (str.slice(-1) === "*") || (str.slice(-1) === ".")) 
                                              && 
        ((arg === "+") || (arg === "-") || (arg === "/") || (arg === "*") || (arg === "."))){ 
          strSet(str);   
        } else {
          strSet(str+arg)
    }
}
}
  return(   
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand" id="prev"></div>
        <div className="current-operand"><p>{str}</p></div>
      </div>  
        <button className="span-two" onClick={() => {calculator('AC')}}>AC</button>
        <button onClick={() => {calculator('DEL')}}>DEL</button>
        <button onClick={() => {calculator('/')}}>/</button>
        <button onClick={() => {calculator('1')}} >1</button>
        <button onClick={() => {calculator('2')}}>2</button>
        <button onClick={() => {calculator('3')}}>3</button>
        <button onClick={() => {calculator('*')}}>*</button>
        <button onClick={() => {calculator('4')}}>4</button>
        <button onClick={() => {calculator('5')}}>5</button>
        <button onClick={() => {calculator('6')}}>6</button>
        <button onClick={() => {calculator('+')}}>+</button>
        <button onClick={() => {calculator('7')}}>7</button>
        <button onClick={() => {calculator('8')}}>8</button>
        <button onClick={() => {calculator('9')}}>9</button>
        <button onClick={() => {calculator('-')}}>-</button>
        <button onClick={() => {calculator('.')}}>.</button>
        <button onClick={() => {calculator('0')}}>0</button>
        <button className="span-two" onClick={() => {calculator('=')}}>=</button>
      
    </div>
  )

}

export default App;