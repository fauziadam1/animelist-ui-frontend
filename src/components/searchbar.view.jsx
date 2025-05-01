import React from 'react'
import { LuSearch as Searchbar} from "react-icons/lu";

function Search () {
  return (
    <form className='bg-gray-100 w-180 h-15 flex items-center justify-between pl-7 pr-7 rounded-[100px]'>
      <input type="text" id='inputsearch' className='w-153 outline-0 border-0'/>
      <label htmlFor="inputsearch">
        <Searchbar className='cursor-pointer text-2xl'/>
      </label>
    </form>
  )
}

export default Search;
