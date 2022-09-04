import React from 'react';
import UseContext2 from './UseContext2';


export const userContext = React.createContext();

const useContext1 = () => {
  return (
    <div>
        <center>
            <userContext.Provider value ={" Sparity this is comnes from UseContext Hook"}>
                <UseContext2/>
                
            </userContext.Provider>
        </center>
    </div>
  )
}

export default useContext1