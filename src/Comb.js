import React,{useContext} from 'react';
import { store } from './App';


const Comb = () => {
    const [data,setData]=useContext(store)
  return (
    <div>
      <h1>ComponentB {[data,setData]}</h1>
    </div>
  )
}

export default Comb
