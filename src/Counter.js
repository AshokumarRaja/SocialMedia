import React,{useState} from 'react'
import './Counter.css'
const Counter = () => {
    const[count,setCount]=useState(0);
    return (
        <div>
            <h1>Count:{count}</h1>
            <div className="counter">
            <button onClick={()=>setCount(prevState=>prevState+1)}>+</button>
            <button onClick={()=>setCount(prevState=>prevState-1)}>-</button>
            <button onClick={()=>setCount(0)}>reset</button>
            </div>
        </div>
    )
}

export default Counter
