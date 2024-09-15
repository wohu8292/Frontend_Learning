import React, { useEffect } from "react"

function Timer(){
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("timer is running...")
        }, 1000);

        return ()=>{
            clearInterval(timer)
        }
    },[])

    return <div>
        <span>timer starts! watch console</span>
    </div>
}

export default Timer