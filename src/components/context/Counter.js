import { createContext, useState } from "react";  

//created a new context
export const CounterContext = createContext(null);

//now making a new provider
export const CounterProvider = ({children})=>{
    const[counter , setCounter]= useState(0);
    const[kartItems , setKartItems] = useState([]);
    return (
      <CounterContext.Provider value={{ counter, setCounter , kartItems , setKartItems }}>
        {children}
      </CounterContext.Provider>
    );
}