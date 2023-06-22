import Header from "./Header";
import Main from "./MainModule";
import HomePage from "./HomePage";

export default function App() {
  return (
    <>
      <Header />
      <Main page={<HomePage />}/>
    </>
  )
}



