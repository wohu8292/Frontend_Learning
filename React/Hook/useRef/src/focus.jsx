import { useEffect } from "react"
import { useRef } from "react"

function Focus(){
    //useRef
    const inputRef = useRef()

    //useEffect
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    //function
    function login(){
        alert(`hello ${inputRef.current.value}!`)
    }

    return <div>
        <input ref={inputRef} type="text" placeholder="userName"/>
        <button onClick={login}>Login</button>
    </div>
}

export default Focus