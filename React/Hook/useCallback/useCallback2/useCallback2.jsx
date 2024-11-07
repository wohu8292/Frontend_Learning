import React, { useState } from 'react'

const useCallback2 = () => {
    const [boxSize, setBoxSize] = useState(10)
    const [circleSize, setCircleSize] = useState(10)
    const [fontSize, setFontSize] = useState(20)

    //함수(객체) boxSizer 가아닌, usecallback 을 사용해 boxSize 가 바뀌었을때만 render
    //useMemo 는 function 의 값 [11,22,33] 리턴하고, useCallback 은 function ()=>{} 자체를 리턴한다
    const boxSizer = useCallback(()=>{
        return [boxSize, boxSize*2, boxSize*3]
    }, [boxSize])

    const circleSizer = useCallback(()=>{
        return [circleSize, circleSize*2, circleSize*3]
    }, [circleSize])

  return (
    <div>
        <h1>useCallback</h1>

        <button onClick={()=>setFontSize(fontSize-1)}>-</button>
        <button onClick={()=>setFontSize(fontSize+1)}>+</button>

        <div style={{display: "flex"}}>
            <div>
                <p style={{fontSize: fontSize + "px"}}>Draw Box</p>
                <input type="number" value={boxSize} onChange={e=>setBoxSize(parseInt(e.target.value))}/>
                <div><DrawBox boxSizer={boxSizer}/></div>
            </div>

            <div>
                <p style={{fontSize: fontSize + "px"}}>Draw Circle</p>
                <input type="number" value={circleSize} onChange={e=>setCircleSize(parseInt(e.target.value))}/>
                <div><DrawCircle circleSizer={circleSizer}/></div>
            </div>
        </div>
    </div>
  )
}

export default useCallback2