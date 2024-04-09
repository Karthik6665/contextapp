import React,{useContext} from 'react';
import { store } from './App';



const Count = () => {
    const [data,setData]=useContext(store);// eslint-disable-next-line
  return (
    <div>
        <center>
            <h1>Count: {[data.length,setData]}</h1>
        </center>
      
    </div>
  )
}

export default Count
