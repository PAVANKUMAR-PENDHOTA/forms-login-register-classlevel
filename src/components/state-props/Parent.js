import React, { Component } from 'react';
import Child from './Child';
import Image from './Image';


export default class Parent extends Component {
  render() {
    return (
      <div>

     <h1>I'm the Parent component</h1>

    <div style={{backgroundColor:"tomato", padding:"10px"}}>
    <h3><Child text="I'm then 1st child"/></h3>
     <h3><Child text="I'm then 2nd child"/></h3>
     <h3><Child text="I'm then 3rd child"/></h3>
    </div>

     <h3> This is Parent component</h3>



     <hr></hr>



     <Image name="I'm the Image Component"/>


    







      </div>
    )
  }
}
