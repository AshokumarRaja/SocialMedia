import React,{useState} from 'react'

import './Option.css'
var options=[];
const Option = () => {
var [option,setOption]=useState("");
   var [options,setOptions]=useState([]);
    const[error,setError]=useState('');
    const AddValue=(e)=>{
    const value= options.indexOf(option);
    if(value==-1){   
      setOptions(prevState=>[...prevState,option]);
      setOption("");
    
      
    }
    else{
        setError("It Is Already Entered");
        
    }
    e.preventDefault();
}
    const removeAll=(e)=>{
        setOptions("");
        e.preventDefault();
    }
    const remove=(option1)=>{
       
       options= options.filter((option)=>{
                return   option1!=option
            })
           setOptions(options)
           
    }
    
    
    return (
        <div className="input">
            <form autoComplete="off">
                <input type="text" name="option" value={option} onChange={(e)=>setOption(e.target.value)}/>
                <button onClick={AddValue} className="submit">Submit</button>
                <button onClick={removeAll} className="removeAll">Remove All</button>
            </form>
            {error && <div>{error}</div> }
            {options.length!=0 &&
               options.map(option =>{
                 return <div className="row" key={option}><p className="value">{option}</p> <button className="remove" onClick={()=>remove(option)}>Remove</button></div>
               })
            }
        </div>
    )
}

export default Option
