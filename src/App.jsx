import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  
function handelClick(){
  alert('Button Clicked');

}
const click2 = ()=>{
  alert('btton has benn cicked');
}
const addtofive = (num) =>{
  alert(num + 5);

}
  return (
    <>
      
      <h3>React Core Concept</h3>
       <Friends></Friends> 
      <User></User>
      <Team></Team>
      <Count></Count>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={click2}>Click 2</button>
      <button onClick={()=>addtofive(5)}>Four</button>
      
      
    </>
  )
}

export default App
