import React, { useContext } from 'react'
//import the userContext from the app
import {userContext} from './../App'

const childC = () => {
  //acess the value given in the context
  const data = useContext(userContext);  
  return (
    <div>
      data is {data.name}
    </div>
  )
}

export default childC
