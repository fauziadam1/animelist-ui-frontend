import React from "react";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { SiFireship as FireIcon} from "react-icons/si";
import { TbDiamondFilled as DmIcon} from "react-icons/tb";
import { FaStar as StarIcon} from "react-icons/fa6";
import { RiSettings3Fill as SettingIcon} from "react-icons/ri";

const SideBarData = [
    {
        title: "Beranda",
        path: "/src/pages/Beranda.view.jsx",
        icon: <HomeIcon/>,
    },
    {
        title: "Trending",
        path: "/dashboard",
        icon: <FireIcon className="text-orange-400"/>,
    },
    {
        title: "Premium",
        path: "/dashboard",
        icon: <DmIcon className="text-blue-300"/>,
    },
    {
        title: "Favorit",
        path: "/dashboard",
        icon: <StarIcon className="text-yellow-400"/>,
    },
    {
        title: "Pengaturan",
        path: "/dashboard",
        icon: <SettingIcon className="text-gray-500"/>,
        class: "setting"
    }
]

export default SideBarData;