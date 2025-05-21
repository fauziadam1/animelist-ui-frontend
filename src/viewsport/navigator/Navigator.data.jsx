import { createElement, lazy } from "react";
import { GoHomeFill as HomeIcon } from "react-icons/go";
import { SiFireship as FireIcon} from "react-icons/si";
import { TbDiamondFilled as DmIcon} from "react-icons/tb";
import { FaStar as StarIcon} from "react-icons/fa6";
import { RiSettings3Fill as SettingIcon} from "react-icons/ri";

export const publicRoutes = [
    {
        title: "Beranda",
        path: "/",
        icon: <HomeIcon />,
        element: createElement(lazy(() => import("@/pages/Beranda/Beranda.jsx")))
    },
    {
        title: "Trending",
        path: "/trending",
        icon: <FireIcon className="text-orange-400" />,
        element: createElement(lazy(() => import("@/pages/Trending/Trending.jsx")))
    },
    {
        title: "Premium",
        path: "/premium",
        icon: <DmIcon className="text-blue-300" />,
        element: createElement(lazy(() => import("@/pages/Premium/Premium.jsx")))
    },
    {
        title: "Favorit",
        path: "/favorit",
        icon: <StarIcon className="text-yellow-400" />,
        element: createElement(lazy(() => import("@/pages/Favorit")))
    },
    {
        title: "Pengaturan",
        path: "/pengaturan",
        icon: <SettingIcon className="text-gray-500" />,
        class: "setting",
        element: createElement(lazy(() => import("@/pages/Pengaturan")))
    }
]

export const privateRoutes = [
    // {
    //     label: "Login",
    //     path: "/login",
    //     element: createElement(lazy(() => import ("@/pages/Login")))
    // },
    // {
    //     label: "Profil",
    //     path: "/profil",
    //     element: createElement(lazy(() => import ("@/pages/Profil")))
    // },
]