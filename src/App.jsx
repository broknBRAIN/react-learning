import React,{useState} from 'react'
import Button from "./component/Button"
import InputCard from "./component/InputCard"
import UserCard from "./component/UserCard"


const handleChange = (e) => {
  console.log(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  //we prevent default behaviour
  //it whenever we press submit
  //its default work is to refresh the page and send the entered info to backend

  //lets write out custom behaviour
  alert("form submitted");
}

//event handling
function App() {
  
  return (
    <div>
      {/* form has a onSubmit event, when even we press the button of type=submit
      it triggers */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' onChange={(e) => handleChange(e)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>

    //passing value to the handleChange function
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