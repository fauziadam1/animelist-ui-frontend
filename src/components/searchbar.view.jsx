import React from 'react'
import { LuSearch as Searchbar} from "react-icons/lu";

function Search () {
  return (
    <form className='bg-gray-100 w-150 h-11 flex items-center justify-between pl-5 pr-5 rounded-[100px]'>
      <input type="text" id='inputsearch' className='w-153 outline-0 border-0 text-[14px]'/>
      <label htmlFor="inputsearch">
        <Searchbar className='cursor-pointer text-xl'/>
      </label>
    </form>
  )
}

export default Search;
