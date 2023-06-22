import { useEffect } from "react";
import down from "./assets/down.svg";
import DropdownOpts from "./DropdownOpts";
import dropdownFunc from "./dropdownFunc";

export default function Dropdown() {
    useEffect(() => {
        document.getElementById("dropdown_header").addEventListener("click", dropdownFunc)
    }, [])
    return (
        <section id="dropdown">
            <section id="dropdown_header" className="shadow">
                <p>Filter by Region</p>
                <img className="icon" src={down} alt="down icon" draggable="false" />
            </section>
            <section id="dropdown_body" className="shadow">
                <DropdownOpts />
            </section>
        </section>
    )
}