import React,{useState} from 'react';
// import Two from './Two';

const One = () => {

const [color, setColor] = useState('Green')

  return (
    <div>

      <h1 style={{color:color}}>WelCome to the ReactJS</h1>
      <button onClick={()=>{
          setColor(color==="Green" ? "red" : "Green");
      }}>Change Color</button>

    </div>
  )
}

export default One