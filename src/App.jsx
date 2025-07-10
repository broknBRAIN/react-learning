import React,{createContext, useEffect, useState} from 'react'
import Button from "./component/Button"
import InputCard from "./component/InputCard"
import UserCard from "./component/UserCard"
import ChildA from './component/ChildA'
import './App.css'

//use context --- to fix prop drilling

//3 steps
//create Context
//provide Context
//consume context


//1.create context
const userContext = createContext();

//2.all the child who can access the context
//  put them under provider
//  you can put them one by one, or just put the root parent, all children will be considered provider as well
// app<>
//   <provider>
//     <childA>
//       -><childB>
//         -><childC>
//   </provider>
// </>

function App() {
  const [data,setName] = useState({name:"Priyansh"});
  return (
    <div>
      <userContext.Provider value={data}>
        {/* step 2. since child b and childc are under root childA, we don;t need to specify them as well */}
        <ChildA />
      </userContext.Provider>
    </div>
  )
}

export default App
export {userContext};//now providing is complete, just consume the value inside the contexts you provided


