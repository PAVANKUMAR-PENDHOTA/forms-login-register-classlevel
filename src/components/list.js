import React from 'react'

export default function list() {
    const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
  <li key={number.toString()}>{number * 2}</li>
);

const [count, setCount] = React.useState(0);

// var users : [{id:1,name:"pavan", age: 25}, {id:2,name:"vinay", age: 27}];
// const userslist = users.map((user)=>
// <li key={user.id}>{user}</li>
// )

  return (
    <div>
        <ul>{listItems}</ul>

        {/* <ul>{userslist}</ul> */}

        <p> Count : {count}</p>
        <button onClick={()=>count+1}>Increase</button>
    </div>
  )
}
