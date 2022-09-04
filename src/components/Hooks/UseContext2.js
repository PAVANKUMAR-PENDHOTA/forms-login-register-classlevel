import React from 'react';
import  {userContext} from './useContext1';

const UseContext2 = () => {
  return (
    <div>
        <userContext.Consumer>
            {value =><div>{value}</div>}
            
        </userContext.Consumer>
    </div>
  )
}

export default UseContext2