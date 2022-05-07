import * as PANOLENS from "panolens";
import * as THREE from 'three';
import entrance2 from './../assets/panos/entrance.jpg';
import stairs2 from './../assets/panos/stairs.jpg';
import koridorius4ds from './../assets/panos/koridorius4ds.jpg';
import { useEffect } from 'react';

const Pano = () => {

  useEffect(() => {
    const entrance = new PANOLENS.ImagePanorama(entrance2);
    const stairs = new PANOLENS.ImagePanorama(stairs2);
    const koridorius4 = new PANOLENS.ImagePanorama(koridorius4ds);
    // let infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);

    // infospot.position.set(-100, -500, -5000);
    // infospot.addHoverText("Stairs");
    // infospot.addEventListener('click', function () {
    //   viewer.setPanorama(stairs);
    // });
    // entrance.add(infospot);

    //Link panos
    entrance.link(stairs, new THREE.Vector3(4653.43, -1451.79, -1082.51));

    entrance.link(koridorius4, new THREE.Vector3(-4798.75, -557.63, -1247.87));

    stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24));

    //placeholder going upstairs
    stairs.link(entrance, new THREE.Vector3(4954.39, 531.99, -260.74));

    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#container"),
      cameraFov: 80,
      autoRotate: false,
      autoRotateSpeed: .5,
      autoRotateActivationDuration: 10000,
      autoHideInfospot: false,
      output: 'console' 
    });

    viewer.add(entrance, stairs, koridorius4);
  }, []);

  return (
    <div id="container" style={{ height: "100%" }}>
    </div>
  );
};

export default Pano;
