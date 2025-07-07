import React,{useState} from 'react'
import Button from "./component/Button"
import InputCard from "./component/InputCard"
import UserCard from "./component/UserCard"


const handleClick = () => {
  alert("i am clicked");
}
//event handling
function App() {
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
    //its so easy to perform operation on click
  )
}

export default App


//suppose we did event handling by java script
//we need to fetch that object by class or id
//then use event listener, then what type of event
//lot of work

//but in react
//once you type on...in props area you get all the events that could be done
//like mousehouwer click etc
//its easy and intutive
//inside the onevent(function to perform you pass)