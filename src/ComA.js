import React,{useContext} from 'react';
import { store } from './App';

const ComA = () => {
  const [data,setData]=useContext(store)
  return (
    <div>
      <h1>ComponentA {[data,setData]}</h1>
    </div>
  )
}

export default ComA
