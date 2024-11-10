import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import NotFound from './NotFound'
import BookLayout from './BookLayout'
import BookRoutes from './BookRoutes'

const App = () => {
  return (
    <>
    {/* standard route 에 변화를주고싶을때 */}
    {/* location: it doesn't matter what url you go to, kind of absolute hard coded absolute url */}
    <Routes location='/books'>
        <Route path='/books' element={<h1>Extra Contents</h1>}/>
    </Routes>

    <nav>
        <ul>
          {/* login 하고 뒤로가기할때 이전페이지로 다시가고싶지않으면 replace */}
            <li><Link to='/' replace>Home</Link></li>   
            <li><Link to='/books'>Books</Link></li>
        </ul>
    </nav>
  
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/books/*' element={<BookRoutes/>} />
        {/* notFound: 없는링크 */}
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App