import React, { useEffect, useRef } from 'react'
import {hightlightsSlides} from '../constants/index'

const Test = () => {
        const testRef = useRef([])

  return (
    <>
       <div>
            {hightlightsSlides.map((list,i)=>(
                <input type="text" ref={(el)=>(testRef.current[i]=el)}/>
            ))}
       </div>
    </>
  )
}

export default Test