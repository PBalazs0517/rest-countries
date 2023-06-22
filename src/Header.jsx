// eslint-disable-next-line no-unused-vars
import sun from "./assets/sun.svg"
import moon from "./assets/moon.svg"
import darkmode from  "./darkmode"

export default function Header() {
  return (
    <header className="shadow padding-400">
      <h1>Where in the world?</h1>
      <button id="themeToggle" className="themeToggle" onClick={darkmode} data-mode="light">
        <img className="icon" src={moon} alt="img" draggable="false"/>
        <p>dark</p>
      </button>
    </header>
  )
}