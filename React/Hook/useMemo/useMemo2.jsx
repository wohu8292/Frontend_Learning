import useMemo from "./useMemo1"

function useMemo2(){
    const [number, setNumber] = useState(0)
    const [isKorea, setIsKorea] = useState(true)

    const location =  useMemo(()=>{
        return {country: isKorea? 'korea' : 'oversea'}      //object 를 caching
    }, [isKorea])

    // const location = {
    //     country: isKorea? 'korea' : 'oversea'
    // }
    
    // primitive type (store variable) vs object type (store location)
    // const location = isKorea? 'korea' : 'oversea'

    useEffect(()=>{
        console.log('useEffect calling')
    }, [location])

    // if you don't use useMemo, object will get different address

    return(
        <div>
            {/* eating */}
            <h2>how many time do you eat?</h2>
            <input 
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} />
        
            <hr />

            {/* traveling */}
            <h2>what country are you in?</h2>
            <p>country: {location}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>get on flight</button>
        </div>
    )
}

export default useMemo2