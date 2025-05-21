import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TiThMenu as MenuIcon } from "react-icons/ti";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { SiFireship as FireIcon } from "react-icons/si";
import { TbDiamondFilled as DmIcon } from "react-icons/tb";
import { FaStar as StarIcon } from "react-icons/fa6";
import { RiSettings3Fill as SettingIcon } from "react-icons/ri";
import { publicRoutes } from '../viewsport/navigator/navigator.data';
import Search from './searchbar.view';


function Navbar() {

  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);

  return (
    <nav className="bg-transparent absolute">
      <div className='bg-white w-full pl-8 pr-8 h-21 fixed z-1000 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <MenuIcon className='text-[25px] cursor-pointer' onClick={showSidebar} />
          <h1 className='font-bold text-2xl'>AnimeList</h1>
        </div>
        <div className='flex items-center gap-10'>
          <Search/>
          <div className='w-12 h-12 overflow-hidden flex items-center rounded-full bg-gray-500 cursor-pointer hover:border-3'>
            <img src="./src/assets/profile.jpg" alt="" className='w-full h-full border-2 border-white rounded-full'/>
          </div>
        </div>
      </div>
      <aside className={`${open ? "w-65" : "w-22"} bg-white top-0 h-screen p-4 overflow-hidden duration-200`}>
        <ul className='pt-20 flex flex-col gap-4'>
          {publicRoutes.map((item, index) => {
            return (
              <li key={index} className={`${item.class} relative`}>
                <Link to={item.path} className='flex items-center gap-8 hover:bg-[#ebf6ff] p-4 rounded-2xl'>
                  <span className='text-[25px]'>{item.icon}</span>
                  <h1 className={`${!open && "opacity-0 duration-200"} duration-100 text-[17px]`}>{item.title}</h1>
                </Link>
              </li>
            )})}
        </ul>
      </aside>
    </nav>
  )
}

export default Navbar;
