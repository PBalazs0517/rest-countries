import sun from "./assets/sun.svg"
import moon from "./assets/moon.svg"

let stateGlobal = false; // false if light true if dark

export default function() {
    const btn = document.getElementById("themeToggle");
    let state = btn.dataset.mode ;

    const root = document.querySelector(":root");

    if(state === "light") {
        root.style.setProperty('--clr-p', 'hsl(209, 23%, 22%)');
        root.style.setProperty('--clr-bg', 'hsl(207, 26%, 17%)');
        root.style.setProperty('--clr-shadow', 'hsla(200, 10%, 21%, 0.171)');
        root.style.setProperty('color', 'hsl(0, 0%, 100%)');

        if(document.getElementById("searchCont")) {
            document.getElementById("searchCont").children[0].classList.add("search-white"); 
        }
        if(document.getElementById("dropdown_header")) {
            document.getElementById("dropdown_header").children[1].classList.add("down-white"); 
        }
        if(document.getElementById("backBtn")) {
            document.getElementById("backBtn").children[0].classList.add("arrow-white");
        }

        btn.dataset.mode = "dark";
        btn.children[1].innerText = "light";
        btn.children[0].src = sun;

        stateGlobal = true;
    } else {
        root.style.setProperty('--clr-p', 'rgb(255, 255,255)');
        root.style.setProperty('--clr-bg', 'rgb(206, 206, 206)');
        root.style.setProperty('--clr-shadow', 'rgb(194, 194, 194)');
        root.style.setProperty('color', 'hsl(209, 23%, 22%)');

        if(document.getElementById("searchCont")) {
            document.getElementById("searchCont").children[0].classList.remove("search-white"); 
        }
        if(document.getElementById("dropdown_header")) {
            document.getElementById("dropdown_header").children[1].classList.remove("down-white"); 
        }
        if(document.getElementById("backBtn")) {
            document.getElementById("backBtn").children[0].classList.remove("arrow-white");
        }

        btn.dataset.mode = "light";
        btn.children[1].innerText = "dark";
        btn.children[0].src = moon;

        stateGlobal = false;
    }
}

export { stateGlobal }