import React, { useEffect, useState } from 'react'

const DrawCircle = ({circleSizer}) => {
    const [sizes, setSizes]=useState([])

    useEffect(()=>{
        setSizes(circleSizer())
        console.log("circle called")
    }, [circleSizer])

    if(sizes !==0){
        return sizes.map((size)=>{
            <div className='myCircle' style={{width:size+"px", height:size+"px"}} key={size}>{size}</div>
        })
    }
}

export default DrawCircle