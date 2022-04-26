import React,{useState}from 'react';
import logo from './logo.svg';
// import css
import './App.css';
import Counter from './Counter';

function App(props) {
  const [counter, setCounter] = useState(5);

  const handleIncrement = () =>{
    setCounter(counter + 1);
  }
  const handleDecrement = () =>{
    setCounter(counter - 1);
  }
  const handleReset = () =>{
    setCounter(5);
  }
  return(
    <>
 <div style={{padding: '10px',color: 'red'}}>
   <h3>This is {props.componentName}</h3>
   Value: {counter}<br></br>

   <button onClick={handleIncrement}>Increment</button> &nbsp;&nbsp;
   <button onClick={handleDecrement}>Decrement</button> &nbsp;&nbsp;
   <button onClick={handleReset}>Reset</button> &nbsp;&nbsp;

   <Counter componentName="Class COMPONENT"/>
 </div>

 </>
  );
}
export default App;
