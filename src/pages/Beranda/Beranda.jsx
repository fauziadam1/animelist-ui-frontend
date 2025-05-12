import { useEffect } from "react";
import Beranda from "./Beranda.view";

export default function Home() {
    useEffect (() => {
        document.title = "Beranda - AnimeList";
    }, [])

    return <HomeView/>;
};