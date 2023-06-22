import searchIcon from "./assets/search.svg";
import { useEffect } from "react";
import search from "./searchLogic";

export default function Search() {

    useEffect(() => {
        const searchBar = document.getElementById("countrySrc");
        searchBar.addEventListener("keyup", search)
    }, [])

    return (
        <section id="searchCont" className="searchCont | shadow-all">
            <img className="icon" src={searchIcon} alt="search icon" draggable="false"/>
            <input type="text" name="Country search" id="countrySrc" placeholder="Search for a country"/>
        </section>
    )
}