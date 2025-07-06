import React,{useState} from 'react'
import Button from "./component/Button"
import InputCard from "./component/InputCard"


//stateLifting
//parent create,manage,changes the state then syncs it between its childrens
function App() {
  //state created in parent
  const [name,setName] = useState('');

  return (
    <div>
      <InputCard name={name} setName ={setName} />
      <p>value of name in parent is {name}</p>
    </div>
  )
}

export default App


//learning props.children

//we have counter component

 /* <Counter props="anything">
      anything over here is the props.children part
    <Counter/> */

//you can even pass functions in props
//you can pass functions as children as well
//see how the counter is implemented now

//where do we use it
//when we don't know how may parameters are there

//we just call children in such a case, when we make a wrapper
//wrapper means anything is given, and you just wrap it,
//in wrapper we don't know how much is gonna come, so we use props.children
