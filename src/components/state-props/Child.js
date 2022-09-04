import React from 'react'

const Child = (props) => {
    // console.log(props.text);
  return (

    <div>

    {/* <h1>This is child class</h1> */}
  <p>{props.text}</p> 

  </div>

  )
};

export default Child