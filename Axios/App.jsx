import api from './api/post'

import React, {useEffect} from 'react'

const App = () => {

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get('/post')
                if (response && response.data) {
                    setPosts(response.data)
                }
            } catch (err) {
                // not in 200 response range
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
        }
    }, [])

    return (<div>App</div>)
}

export default App