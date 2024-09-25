import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
  return (
    <>
        <Link to='/books/1'>Book1</Link>
        <br />
        <Link to='/books/2'>Book2</Link>
        <br />
        <Link to='/books/new'>New Book</Link>
        
        {/* Outlet: render child component whatever current route is */}
        <Outlet context={{hello:'World'}}/>
    </>
  )
}

export default BookLayout