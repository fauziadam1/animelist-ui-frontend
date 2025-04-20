import React from "react";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { SiFireship as FireIcon} from "react-icons/si";
import { TbDiamondFilled as DmIcon} from "react-icons/tb";
import { FaStar as StarIcon} from "react-icons/fa6";
import { RiSettings3Fill as SettingIcon} from "react-icons/ri";

const SideBarData = [
    {
        title: "Beranda",
        path: "/dashboard",
        icon: <HomeIcon/>,
    },
    {
        title: "Trending",
        path: "/dashboard",
        icon: <FireIcon/>,
    },
    {
        title: "Premium",
        path: "/dashboard",
        icon: <DmIcon/>,
    },
    {
        title: "Favorit",
        path: "/dashboard",
        icon: <StarIcon/>,
    },
    {
        title: "Setting",
        path: "/dashboard",
        icon: <SettingIcon/>,
    }
]

export default SideBarData;