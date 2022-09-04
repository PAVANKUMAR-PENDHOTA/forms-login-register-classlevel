import React from 'react';
import StateUse from './StateUse';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseContext2 from './UseContext2';
import UseContext1 from './useContext1';

const MainHook = () => {
  return (
    <div>
        <StateUse/>
        <UseReducer/>
        <UseRef/>
        <UseContext1/>
        <UseContext2/>
        <UseEffect/>
    </div>
  )
}

export default MainHook