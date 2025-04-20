import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TiThMenu as MenuIcon } from "react-icons/ti";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { SiFireship as FireIcon } from "react-icons/si";
import { TbDiamondFilled as DmIcon } from "react-icons/tb";
import { FaStar as StarIcon } from "react-icons/fa6";
import { RiSettings3Fill as SettingIcon } from "react-icons/ri";
import SideBarData from './SidebarData';

function Navbar() {

  const [open, setOpen] = useState(false);
  const showSidebar = () => setOpen(!open);

  return (
    <nav>
      <div className='bg-white w-full pl-8 pr-8 p-8 fixed z-1000'>
        <div className='flex items-center gap-4'>
          <MenuIcon className='text-[30px] cursor-pointer' onClick={showSidebar} />
          <h1 className='font-bold text-3xl'>AnimeList</h1>
        </div>
      </div>
      <aside className={`${open ? "w-65" : "w-25"} bg-white top-0 h-screen p-4 overflow-hidden duration-200`}>
        <ul className='pt-25 flex flex-col gap-4'>
          {SideBarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className='flex items-center gap-4 hover:bg-[#ebf6ff] p-4 rounded-2xl'>
                  <span className='text-3xl'>{item.icon}</span>
                  <h1 className={`${!open && "scale-0"}`}>{item.title}</h1>
                </Link>
              </li>
            )})}
        </ul>
      </aside>
    </nav>
  )
}

export default Navbar;
