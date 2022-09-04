import React,{useState} from 'react';
import One from './One';

const Total = () => {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);



    const toggler = () => {
        setToggle((prev)=> !prev);
        console.log(toggle);
    };


    const increament = () =>{
        setCount(count+1);
        console.log(count);
    }


    // const tweets = [
    //     {name: "Raju", tweet: "hello boddies"},
    //     {name: "Ravan", tweet: "Close boddies"},
    //     {name: "Hyper", tweet: "boddies"},
    // ]
    // console.log("tweets");
  return (
    <div>

        <h1 className = {toggle ? "active": " "}>If click Button , Then it is Hideded </h1>
        <button onClick={toggler}> Click</button>

        <div>

            <h2>Count : {count}</h2>
            <button onClick={increament}>increament</button>

        </div>

        <div>

            {/* <One me={tweets.name} tweet = {tweets.tweet}/> */}

            <One />
            

        </div>



    </div>
  )
}

export default Total;