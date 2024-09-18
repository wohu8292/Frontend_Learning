import React, { useState } from "react"

function App(){
    const[inputValue, setInputValue] = useState('')
    const[list, setList] = useState([
        {
            id:'1',
            value:'eating'
        },
        {
            id:'2',
            value: 'coding'
        }
    ])

    //function
    const addToList = ()=>{
        //setList 콜백함수의 인자는 state value 다
        setList((prevList)=>{
            console.log(...prevList)
            return [{id: list.length+1, value:inputValue}, ...prevList]
        })
        setInputValue('')
    }

    return <>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addToList}>add</button>
        <ul>
            {list.map((elements, index)=>{
                // index는 계속변해서 불안정하기때문에 동적일땐 키값으로 주면 안됨
                return <li key={elements.id}>{elements.value}</li>          
            })}
        </ul>
    </>
}

export default App