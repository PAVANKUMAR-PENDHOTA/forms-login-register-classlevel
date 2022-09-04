import React,{useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
      <div>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>
  
        {state.showText && 


        <p style={{color:"tomato"}}>The useReducer Hook is similar to the useState Hook.<br/>

        It allows for custom state logic.<br/>

        If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>}
      </div>
    );
  };

export default UseReducer   