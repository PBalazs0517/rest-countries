/* eslint-disable react/prop-types */
import backArrow from "./assets/arrow-back.svg";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Main from "./MainModule";
import Header from './Header';
import darkmode from "./darkmode";
import { stateGlobal } from "./darkmode";

export default function Backbtn() {

    const [isMainRendered, setMainRendered] = useState(false);
    const [isInitialRender, setInitialRender] = useState(true);

    function clickHandler() {
        const main = document.querySelector("main");
        const root = document.getElementById("root")
        root.removeChild(main);
    
        setMainRendered(true);
    }

    function renderIfTrue() {
        if (isMainRendered) {
            return (
                ReactDOM.createRoot(document.getElementById('root')).render(
                    <React.StrictMode>
                        <>
                            <Header />
                            <Main page={<HomePage />}/>
                        </>
                    </React.StrictMode>
                  )
            );
        }
    }
  
    useEffect(() => {
        if (!isInitialRender) {
            renderIfTrue();
        } else {
            setInitialRender(false);
        }
    }, [isMainRendered]);

    useEffect(() => {
        if(stateGlobal) {
            document.getElementById("themeToggle").dataset.mode = "light";
            darkmode();
        } else {
            document.getElementById("themeToggle").dataset.mode = "dark";
            darkmode();
        }
    }, [])

    return (
        <button id="backBtn" className="shadow" onClick={clickHandler}>
            <img src={backArrow} alt="back arrow"  className="icon" draggable="false"/>
            <p>back</p>
        </button>
    )
}