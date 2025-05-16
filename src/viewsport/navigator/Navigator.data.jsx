import { createElement, lazy } from "react";

export const publicRoutes = [
    {
        title: "Beranda",
        path: "/",
        icon: <HomeIcon />,
        element: createElement(lazy(() => import("/src/pages/Beranda")))
    },
    {
        title: "Trending",
        path: "/trending",
        icon: <FireIcon className="text-orange-400" />,
        element: createElement(lazy(() => import("/src/pages/Beranda")))
    },
    {
        title: "Premium",
        path: "/premium",
        icon: <DmIcon className="text-blue-300" />,
        element: createElement(lazy(() => import("/src/pages/Beranda")))
    },
    {
        title: "Favorit",
        path: "/favorit",
        icon: <StarIcon className="text-yellow-400" />,
        element: createElement(lazy(() => import("/src/pages/Beranda")))
    },
    {
        title: "Pengaturan",
        path: "/pengaturan",
        icon: <SettingIcon className="text-gray-500" />,
        class: "setting",
        element: createElement(lazy(() => import("/src/pages/Beranda")))
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