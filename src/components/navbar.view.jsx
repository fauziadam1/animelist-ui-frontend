import React from 'react'
import { TiThMenu as MenuIcon } from "react-icons/ti";
import SideBarData from './SidebarData';

function Navbar() {
  return (
    <div>
         <nav className='bg-white w-full pl-6 pr-6 p-8'>
            <div className='flex items-center gap-4'>
              <MenuIcon className='text-2xl'/>
              <h1 className='font-bold text-3xl'>AnimeList</h1>
            </div>
         </nav>
    </div>
  )
}

export default Navbar;
