import './App.css';
import Pano from "./components/Pano";
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';
import Banner from './components/Banner';
import * as PANOLENS from "panolens";
import * as THREE from 'three';
import { useState, useEffect } from "react";


function App() {
  const [entered, setEntered] = useState(false);
  const [panoLoaded, setPanoLoaded] = useState(false);
  // useEffect(() => {
  // const entrance = new PANOLENS.ImagePanorama("Entrancedownscale.jpg");
  // const stairs = new PANOLENS.ImagePanorama("stairs.jpg");
  //   // let infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);

  //   // infospot.position.set(-100, -500, -5000);
  //   // infospot.addHoverText("Stairs");
  //   // infospot.addEventListener('click', function () {
  //   //   viewer.setPanorama(stairs);
  //   // });
  //   // entrance.add(infospot);

  //   //Link panos
  // entrance.link(stairs, new THREE.Vector3(4653.43, -1451.79, -1082.51));

  // stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24));

  // //placeholder going upstairs
  // stairs.link(entrance, new THREE.Vector3(4954.39, 531.99, -260.74));

  // const viewer = new PANOLENS.Viewer({
  //   container: document.querySelector("#container"),
  //   cameraFov: 80,
  //   autoRotate: true,
  //   autoRotateSpeed: .5,
  //   autoRotateActivationDuration: 10000,
  //   autoHideInfospot: false,
  //   output: 'console',
  // });
  // viewer.add(entrance, stairs);
  // }, []);

  return (
    <>
      {entered ? <></> : <Banner entered={entered} setEntered={setEntered}/>}
      {entered ? <NavTop entered={entered} setEntered={setEntered}/> : ''}
      {entered ? <NavLeft /> : ''}
      {entered ? <Pano panoLoaded={panoLoaded} setPanoLoaded={setPanoLoaded}/> : ''}
    </>
  );
}

export default App;
