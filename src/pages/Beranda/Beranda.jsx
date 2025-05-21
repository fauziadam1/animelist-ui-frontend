import { useEffect } from "react";
import BerandaView from "./Beranda.view.jsx";

export default function Beranda() {
    useEffect (() => {
        document.title = "Beranda - AnimeList";
        console.log("Title sekarang:", document.title);
    }, []);

    return <BerandaView/>;
}