/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";
import Details from "./DetailPage";
import Main from "./MainModule";
import Header from './Header';
import darkmode from './darkmode';
import { stateGlobal } from './darkmode';

export default function Country(props) {

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
                            <Main page={<Details country={props.name} />} />
                        </>
                    </React.StrictMode>,
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
        <div className="country | shadow" onClick={clickHandler}>
            <img src={props.img} draggable="false"></img>
            <h1>{props.name}</h1>
            <ul>
                <li><span>Population: </span>{props.population}</li>
                <li><span>Region: </span>{props.region}</li>
                <li><span>Capital: </span>{props.capital}</li>
            </ul>
        </div>
    )
}