import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import React from "react"

function CountRend(){
    //useState
    const[renderingCount, setRenderingCount] = useState(1)
    const[count, setCount] = useState(1)

    //useRef
    const renderCount = useRef(1)

    //countRendering                        // 무한루프: useEffect 실행 > count 렌더링 > useEffect 실행...
    // useEffect(()=>{
    //     setCount(count+1)
    // })

    useEffect(()=>{
        renderCount.current = renderCount.current +1
        console.log("number of rendering: ", renderCount.current)
    })

    //function
    const increaseCountState = ()=>{
        setRenderingCount(renderingCount+1)
    }

    //return
    return <div>
        <p>Rendering Count: {renderingCount} </p>
        <button onClick={increaseCountState}>update state</button>
    </div>
}

export default CountRend