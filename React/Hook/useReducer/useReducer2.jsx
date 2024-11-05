import useReducer2_student from "./useReducer2_student"

const reducer = (state, action) => {
    switch (action.type) {
        //action type1
        case 'add-student':
            const name = action.payload.name
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false
            }
            return {
                count: state.count + 1,
                students: [
                    ...state.students,
                    newStudent
                ]
            }

        // action type2    
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter((student)=>
                    student.id !== action.payload.id)
            }
        
        // action type3
        case 'mark-student':
            return{
                count: state.count,
                students: state.students.map(student=>{
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }else{
                        return student
                    }
                }) 
            }

        // no action type    
        default:
            return state
    }
}

const initialState = {
    count: 0,
    students: []
}

// _____________________________________________________________________

function App() {
    const [name, setName] = useState('')
    const [studentsInfo, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Attendacne</h1>
            <p>Number of Student: {studentsInfo.count}</p>
            
            {/* input */}
            <input
                type="text"
                placeholder="enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>

            {/* add button */}
            <button onClick={()=>{dispatch({type:'add-student', payload:{name}})}}>
                add
            </button>


            {studentsInfo.students.map(student => {
                        return <useReducer2_student 
                        key={student.id} 
                        name={student.name} 
                        dispatch={dispatch} 
                        id={student.id}
                        isHere={student.isHere}/>
                    })
            }
        </div>
    )
}