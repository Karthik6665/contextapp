import React,{createContext, useState} from 'react';
import Count from './Count';
import Display from './Display';

export const store=createContext();
const App = () => {
  const [data,setData]=useState([
    {
      id:1,
      brandname:"Nokia"

    },
    {
      id:2,
      brandname:"Apple"

    },
    {
      id:3,
      brandname:"Samsung"

    }
  ]);
  return (
    <div>
      <store.Provider value={[data,setData]}>
        <Count/>
        <Display/>
      </store.Provider>
    </div>
  )
}

export default App
