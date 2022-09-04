import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      Hello World

      <h1>{count}</h1> 
       <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <hr/>

       <center>
       {data.map(item=><li key={item.id}>{item.name}</li>)}
       </center>
   <hr/>

   {/* {data.map(items=><li key={items.id}>{items.email}</li>)} */}

    </div>
  );
}

export default EffectTutorial;