import React,{useState,useEffect,useRef} from 'react'

const UseRef = () => {

    const [inputValue, setInputValue] = useState("");

    const ref = useRef(0);

    useEffect(()=>{
        ref.current = ref.current+1;
    });




  return (
    <div>
        <hr/>
        <h1>Pavankumar</h1>
        <input type ="text" placeholder='Ex..' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  />

        <h3>Render Count :{ref.current}</h3>

        <p>useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0). <br/> It is using Direct DOM , its not rerender again and again..</p>

        <hr/>

    </div>
  )
}

export default UseRef