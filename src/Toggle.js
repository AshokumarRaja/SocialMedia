import React ,{useState}from 'react'
import './Toggle.css'
const Toggle = () => {
    const [toggle,setToggle]=useState(false);
    return (
        <div>
            <button id="toggle" onClick={()=>setToggle(prevState=>!prevState)}>{!toggle ? "Show Details" : "Hide Details" }</button>
          { toggle && <p>Is Toggle</p>}
        </div>
    )
}

export default Toggle
