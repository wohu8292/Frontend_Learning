//동기 vs 비동기


fetch('https://reqres.in/api/users')
    .then(res=>{
        if(res.ok){
            return res.json()          
        }else{
            console.log("not successful")
        }
    })
    .then(data=>console.log(data))
    .catch(error=>console.log("ERROR"))

// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'}, 
//     body: JSON.stringify({name: 'User 1'})
//     })
//     .then(res=>{
//         return res.json()
//     })
//     .then(data=>console.log(data))
//     .catch(error=>console.log('Error'))
