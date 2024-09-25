import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BookList from './BookList'
import Book from './Book'
import NewBook from './NewBook'
import BookLayout from './BookLayout'

const BookRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<BookLayout/>}>
            <Route index element={<BookList/>}/>
            {/* useParams 으로 route 받기 vs 하드코딩: 하드코딩 win */}
            <Route path=':id' element={<Book/>}/>
            <Route path='new' element={<NewBook/>}/> 
        </Route>  
    </Routes>
    </>
  )
}

export default BookRoutes