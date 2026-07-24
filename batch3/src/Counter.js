import { useState } from "react"
import { useEffect } from "react"

export default function Counter(){
    //let count=0;
    const [count,setCount]=useState(0)
    useEffect(()=>{document.title=count},[count])
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function Reset(){
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </>
    )
}