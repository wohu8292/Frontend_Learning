//useMemo 와 다르게 useCallback 은 callback 함수 자체를 caching 함
//state 를 변경할때마다 variable 이 초기화되는데, js 에서 함수는 하나의 객체이자 변수임

function useCallback1(){
    const [number, setNumber] = useState(0)
    const [toggle, setToggle] = useState(true)

    //rendering 되면 함수(객체) 가 재생성되고 주소값이 바뀌어서 useEffect 실행됨
    // const someFunction=()=>{
    //     console.log(`someFunc: number: ${number}`)
    //     return
    // }

    
    const someFunction=useCallback(()=>{
        console.log(`someFunc: number: ${number}`)
        return 
    }, [number])          //처음 rendering 될때만 할당

    useEffect(()=>{
        console.log("someFunction has changed")}
        ,[someFunction])

    return(
        <div>
            <inputx
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} />

            <button onClick={()=>setToggle(!toggle)}>
                {toggle.toString()}
            </button>

            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}