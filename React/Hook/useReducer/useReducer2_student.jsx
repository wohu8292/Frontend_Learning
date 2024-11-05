import React from 'react'

const useReducer2_student = ({name, dispatch, id, isHere}) => {
  return (
    <div>
        {/* mark-student */}
        <span 
        style={{textDecoration: isHere? `line-through`:`none`, color: isHere? `gray`:`black`,}}
        onClick={()=>{dispatch({type:'mark-student', payload:{id}})}}>
            {name}
        </span>

        {/* delete student */}
        <button onClick={()=>{dispatch({type: 'delete-student', payload:{id}})}}>
            delete
        </button>
    </div>
  )
}

export default useReducer2_student