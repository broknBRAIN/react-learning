import React,{useState} from "react";
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="counter-container">
                <p id='para'>You have clicked {count} times</p>
                <button id='btn' onClick={() => {  setCount(count+1) }}>Click me</button>
            </div>
        </div>
    )
}

export default Counter;

//we are using STATE functionality of react
//use is the suffix, through which we hook to STATE
//every hook starts with use


//working
//1st argument : count is the variable
//2nd argument : setCount is a function to modify the var
//useState(0) initialises the var with 0