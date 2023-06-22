import { useEffect } from "react";
import filter from "./filter";

export default function DropdownOpts() {
    const options = ["all region", "africa", "america", "asia", "europe", "oceania"];

    useEffect(() => {
        const optionsToAddEventl = Array.from(document.querySelectorAll(".options"));
        optionsToAddEventl.forEach( opt => {
            opt.addEventListener("click", filter)
        })
    }, [])

    const optionsLis = options.map(opt => {
        return (
            <li className="options" key={opt} id={opt.split(' ')[0]}>
                {opt}
            </li>
        )
    });

    return (
        <ul>{optionsLis}</ul>
    )
}