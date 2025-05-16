import { useEffect } from "react";
import BerandaView from "./Beranda.view";

export default function Beranda() {
    useEffect (() => {
        document.title = "Beranda - AnimeList";
    }, []);

    return <BerandaView/>;
}