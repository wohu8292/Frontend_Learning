import React, { useEffect, useState } from 'react'

const DrawBox = ({boxSizer}) => {
    const [sizes, setSizes]=useState([])

    useEffect(()=>{
        setSizes(boxSizer())
        console.log("Box called")
    }, [boxSizer])

    if(sizes !==0){
        return sizes.map((size)=>{
            <div className='myBox' style={{width:size+"px", height:size+"px"}} key={size}>{size}</div>
        })
    }
}

export default DrawBox