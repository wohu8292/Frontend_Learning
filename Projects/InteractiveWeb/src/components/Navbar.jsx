import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from "../constants"

// style={{border: "1px solid white"}}
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple Logo" width={14} height={18}/>

        <div className='flex flex-1 max-sm:hidden justify-center'>
          {['Phones', 'MacBooks', 'Tablets'].map((element)=>(
            <div key={element} className='px-5 text-small hover:text-white text-gray cursor-pointer transition-all'>
              {element}
            </div>
          ))}
        </div>

        <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1' style={{border: "1px solid white"}}>
          <img src={searchImg} alt='search' width={18} height={18}/>
          <img src={bagImg} alt='bag' width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar