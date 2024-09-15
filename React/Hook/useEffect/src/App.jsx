import { useEffect, useState } from "react"
import React from "react"
import Timer from "./Timer"

function App(){
    // useState
    const[count, setCount] = useState(0)
    const[text, setText] = useState(" ")
    const[timer, setTimer] = useState(false)

    // useEffect
    useEffect(()=>{
        console.log("printed when counted")
    }, [count])

    function handleCountUpdate(){
        setCount(count+1)
    }

    function handleInputChange(e){
        setText(e.target.value)
    }

    return <div>
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
        <div>
            <input type="text" value={text} onChange={handleInputChange}/>
            <span>name: {text}</span>
        </div>
        <div>
            {timer && <Timer />}
            <button onClick={()=>{setTimer(!timer)}}>Toggle Timer</button>
        </div>
    </div>
}

export default App