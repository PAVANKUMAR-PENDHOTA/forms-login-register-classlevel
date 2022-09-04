import React,{useState} from 'react'

const StateUse = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("UseState Hook")

    const increment =()=>{
        setCounter(counter+1);
    }

    let changeHandler = (e) =>{
        const newValue = e.target.value;
        setInputValue(newValue);
    }



  return (
      
    <div>
        <p style={{color:"blue"}}>I'm using useState Hook Here , COUNTS:<span style={{color:"green", textDecoration:"bold"}}> {counter} </span></p>
        <button onClick={increment}> increment</button> <br/> <br/>

        <input type = "text" placeholder='Search for something..' onChange={changeHandler} />

        <h3>{inputValue}</h3>
        <hr/>
        
    </div>
  )
}

export default StateUse