import React,{useEffect, useState} from 'react'
import Button from "./component/Button"
import InputCard from "./component/InputCard"
import UserCard from "./component/UserCard"
import './App.css'


//useEffect hook  --- side effect generation

//first --- side effect function
//second -- clean up function, when ui element unmounts
//third --- comma seperator dependency list

//general form
// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

//variation 1 : run on very render (no dependency list)
// useEffect( () => {
//   alert("every render");
// })

//when does it runs
//when the value is changed in code
//it needs to update on frontend
//now before front end is updated
//first of useEffect is executed then frontend gets update

//variation 2 : runs on first render only (dependency list empty)
// useEffect( () => {
//   alert("first render");
// }, [])

//variation 3 : runs when dependency list is updated
// useEffect( () =>{
// alert("count updated");
// }, [count]);

//runs before the updated value of count is to be displayed
//count was 1, you pressed button
//now first useEffect first completes
//then count becomes 2 on front end


//variation 4 : clean up function
// useEffect( ()=> {
//   console.log("count updated");

//   return () => {
//     console.log("prev count unmounted");
//   }
// },[count]);

//current count is 2
//you pressed button, count is 3, ui needs to update (when we need to remove evenListener from a component, 1st listner remove,then component unmounts, thus second runs before unmounting)
//now before 2 is changed(unmounted) second finishes
//now 2 is removed
//before 3 is written
//first completes
//now 3 is written in the ui



function App() {
  const [count,setCount] = useState(0);

  const handleCount = () => {
    setCount(count+1);
  }
  useEffect( ()=> {
    alert("count updated");
  
    return () => {
      alert("prev count unmounted");
    }
  },[count]);
  return (
    <div>
      <p>hello</p>
      <button onClick={handleCount}>Click me</button>
      <br></br>
      {count}
    </div>

  )
}

export default App


