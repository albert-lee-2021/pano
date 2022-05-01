import './App.css';
import Pano from "./components/Pano";
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';
import Banner from './components/Banner';
import { useState } from "react";


function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? null : <Banner entered={entered} setEntered={setEntered}/>}
      {entered ? <NavTop entered={entered} setEntered={setEntered}/> : null}
      {entered ? <NavLeft /> : null}
      {entered ? <Pano entered={entered} /> : null}
    </>
  );
}

export default App;
