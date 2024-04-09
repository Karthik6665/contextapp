import React, { useContext, useState } from 'react'
import { store } from './App'

const Display = () => {
    const [data, setData] = useContext(store)
    const [name, setName] = useState(""); // Added initial value ""

    const submitHandler = (e) => {
        e.preventDefault();
        setData([...data, { brandname: name }]);
        setName(""); 
    }

    return (
        <div>
            <center>
                <div>
                    {data.map((item, index) => <h3 key={index}>{item.brandname}</h3>)}
                    <form onSubmit={submitHandler}>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Mobile brand' />
                        <input type='submit' value="Add" />
                    </form>
                </div>
            </center>
        </div>
    )
}

export default Display
