//rendering 이란 component function 을 호출한다는것 => 내부 variable 초기화
//useMemo 를 통해서 memoization 을 해주고 memoize 된 varibale 을 재사용할수 있음
//꼭 필요할때만, 불필요한 variable 을 memoize  해버리면 낭비임

const hardCalculate=(number)=>{
    console.log("hard calculate")
    for(let i=0 ; i<9999999; i++){};        //생각하는시간
    return number + 10000
}

const easyCalculate=(number)=>{
    console.log("easy calculate")
    return number+1
}

function useMemo1(){
    const [hardNumber, setHardNumber] = useState(1)
    const [easyNumber, setEasyNumber] = useState(1)

    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber)
    }, [hardNumber])        // hardNumber 의 값이 바뀔때만 안의 return 될 함수 실행

    // const hardSum = hardCalculate(hardNumber)
    const easySum = easyCalculate(easyNumber)

    return(
        <div>
            <h3>HEAVY CALCULATOR</h3>
            <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))} />
            <span> + 10000 = {hardSum} </span>

            <h3>LIGHT CALCULATOR</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
            <span> + 1 = {easyNumber} </span>
        </div>
    )
}

export default useMemo1