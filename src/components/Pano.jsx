import * as PANOLENS from "panolens";
import * as THREE from 'three';
import { useEffect } from 'react';

const Pano = () => {

  useEffect(() => {
    const entrance = new PANOLENS.ImagePanorama("Entrancedownscale.jpg");
    const stairs = new PANOLENS.ImagePanorama("stairs.jpg");
    // let infospot = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);

    // infospot.position.set(-100, -500, -5000);
    // infospot.addHoverText("Stairs");
    // infospot.addEventListener('click', function () {
    //   viewer.setPanorama(stairs);
    // });
    // entrance.add(infospot);

    //Link panos
    entrance.link(stairs, new THREE.Vector3(4653.43, -1451.79, -1082.51));

    stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24));

    //placeholder going upstairs
    stairs.link(entrance, new THREE.Vector3(4954.39, 531.99, -260.74));

    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#container"),
      cameraFov: 80,
      autoRotate: true,
      autoRotateSpeed: .5,
      autoRotateActivationDuration: 10000,
      autoHideInfospot: false,
      // output: 'console',
    });

    viewer.add(entrance, stairs);
  }, []);

  return (
    <div id="container" style={{ height: "100%" }}>
    </div>
  );
};

export default Pano;
