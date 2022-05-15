import './App.scss';
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';
import NavContainer from './components/NavContainer';
import Banner from './components/Banner';

import entrance2 from './assets/panos/entrance.jpg'
import stairs2 from './assets/panos/stairs.jpg';
import koridorius4ds from './assets/panos/koridorius4ds.jpg';
import outside from './assets/panos/outside.jpg';
import tiltas from './assets/panos/tiltas.jpg';
import fourfloorstairss from './assets/panos/fourfloorstairss.jpg';
import koridorius42 from './assets/panos/koridorius42.jpg';
import fourfour from './assets/panos/fourfour.jpg';
import fourfive from './assets/panos/fourfive.jpg';
import fourone from './assets/panos/fourone.jpg';
import fourtwo from './assets/panos/fourtwo.jpg';
import fourthree from './assets/panos/fourthree.jpg';
import loftas12 from './assets/panos/loftas12.jpg';
import loftas22 from './assets/panos/loftas22.jpg';
import loftas32 from './assets/panos/loftas32.jpg';
import fentrances from './assets/panos/fentrance.jpg';
import fcenters from './assets/panos/fcenter.jpg';
import f1s from './assets/panos/f1.jpg';
import f2s from './assets/panos/f2.jpg';
import f3s from './assets/panos/f3.jpg';
import f4s from './assets/panos/f4.jpg';
import f5s from './assets/panos/f5.jpg';
import loftoranas1d from './assets/panos/loftoranas1.jpg';
import loftoranas2d from './assets/panos/loftoranas2.jpg';
import libraryd1 from './assets/panos/library1.jpg';
import libraryd2 from './assets/panos/library2.jpg';

import * as PANOLENS from "panolens";
import * as THREE from 'three';

import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);

  let panoWithInfoSpots = (image, infospots=[]) => {
    let pano = new PANOLENS.ImagePanorama(image);
    for (let i = 0; i < infospots.length; i++) {

      //the 350 on the next line changes the infospot size
      let infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);

      //if the infospot exists, set it's position to the coordinates originally given
      if(infospots[i])
        infospot.position.set(infospots[i].coords[0], infospots[i].coords[1], infospots[i].coords[2]);

      //the 50 on the next line represents vertical height from pano
      infospot.addHoverText(infospots[i].text, 50);
      pano.add(infospot);
    }
    return pano;
  }

  const entrance = useMemo(() => panoWithInfoSpots(
    entrance2,
    [
      //entrance info spots
      {
        coords: [413.25, -217.35, -4969.80],
        text: 'spot 1'
      },
      {
        coords: [-1313.88, -1728.78, -4494.17],
        text: 'spot 2'
      },
    ]
  ), []);
  
  const stairs = useMemo(() => new PANOLENS.ImagePanorama(stairs2), []);
  const koridorius4 = useMemo(() => new PANOLENS.ImagePanorama(koridorius4ds), []);
  const outside2 = useMemo(() => new PANOLENS.ImagePanorama(outside), []);
  const tiltas2 = useMemo(() => new PANOLENS.ImagePanorama(tiltas), []);
  const fourfloorstairs = useMemo(() => new PANOLENS.ImagePanorama(fourfloorstairss), []);
  const koridorius4d2 = useMemo(() => new PANOLENS.ImagePanorama(koridorius42), []);
  const fourdotfour = useMemo(() => new PANOLENS.ImagePanorama(fourfour), []);
  const fourdotfive = useMemo(() => new PANOLENS.ImagePanorama(fourfive), []);
  const fourdotone = useMemo(() => new PANOLENS.ImagePanorama(fourone), []);
  const fourdottwo = useMemo(() => new PANOLENS.ImagePanorama(fourtwo), []);
  const fourdotthree = useMemo(() => new PANOLENS.ImagePanorama(fourthree), []);
  const loftas1 = useMemo(() => new PANOLENS.ImagePanorama(loftas12), []);
  const loftas2 = useMemo(() => new PANOLENS.ImagePanorama(loftas22), []);
  const loftas3 = useMemo(() => new PANOLENS.ImagePanorama(loftas32), []);
  const fentrance = useMemo(() => new PANOLENS.ImagePanorama(fentrances), []);
  const fcenter = useMemo(() => new PANOLENS.ImagePanorama(fcenters), []);
  const f1 = useMemo(() => new PANOLENS.ImagePanorama(f1s), []);
  const f2 = useMemo(() => new PANOLENS.ImagePanorama(f2s), []);
  const f3 = useMemo(() => new PANOLENS.ImagePanorama(f3s), []);
  const f4 = useMemo(() => new PANOLENS.ImagePanorama(f4s), []);
  const f5 = useMemo(() => new PANOLENS.ImagePanorama(f5s), []);
  const loftoranas1 = useMemo(() => new PANOLENS.ImagePanorama(loftoranas1d), []);
  const loftoranas2 = useMemo(() => new PANOLENS.ImagePanorama(loftoranas2d), []);
  const library1 = useMemo(() => new PANOLENS.ImagePanorama(libraryd1), []);
  const library2 = useMemo(() => new PANOLENS.ImagePanorama(libraryd2), []);

  // const  = useMemo(() => new PANOLENS.ImagePanorama(), []);

  const [allDots] = useState({
    'entrance': [
      // dot 1 for entrance pano
      { top: '3rem', left: '-19rem', destination: entrance, clicked: false },
      // dot 2 for entrance pano
      { top: '-3px', left: '-28rem', destination: stairs, clicked: false },
      // dot 3 for entrance pano
      { top: '8px', left: '-14rem', destination: outside2, clicked: false }
    ],
    'f': [
      // dot 1 for f pano
      { top: '10rem', left: '10rem', destination: fentrance, clicked: false },
      // dot 2 for f pano
      { top: '10rem', left: '10rem', destination: fcenter, clicked: false },
      // dot 3 for f pano
      { top: '10rem', left: '10rem', destination: f1, clicked: false },
      // dot 4 for f pano
      { top: '10rem', left: '10rem', destination: f2, clicked: false },
      // dot 5 for f pano
      { top: '10rem', left: '10rem', destination: f3, clicked: false },
      // dot 6 for f pano
      { top: '10rem', left: '10rem', destination: f4, clicked: false },
      // dot 7 for f pano
      { top: '10rem', left: '10rem', destination: f5, clicked: false }
    ],
    'four': [
      // dot 1 for four pano
      { top: '10rem', left: '10rem', destination: fourfloorstairs, clicked: false },
      // dot 2 for four pano
      { top: '10rem', left: '10rem', destination: koridorius4, clicked: false },
      // dot 3 for four pano
      { top: '10rem', left: '10rem', destination: koridorius4d2, clicked: false },
      // dot 4 for four pano
      { top: '10rem', left: '10rem', destination: fourdotone, clicked: false },
      // dot 5 for four pano
      { top: '10rem', left: '10rem', destination: fourdottwo, clicked: false },
      // dot 6 for four pano
      { top: '10rem', left: '10rem', destination: fourdotthree, clicked: false }


    ],
    'loftas': [
      // dot 1 for loftas pano
      { top: '10rem', left: '10rem', destination: tiltas2, clicked: false },
      // dot 2 for loftas pano
      { top: '10rem', left: '10rem', destination: loftas1, clicked: false },
      // dot 3 for loftas pano
      { top: '10rem', left: '10rem', destination: loftas2, clicked: false },
      // dot 4 for loftas pano
      { top: '10rem', left: '10rem', destination: loftas3, clicked: false },
      // dot 5 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 6 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 7 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 8 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 9 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 10 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 11 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 12 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 13 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 14 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 15 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 16 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 17 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 18 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 19 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 20 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 21 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 22 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false },
      // dot 23 for loftas pano
      { top: '10rem', left: '10rem', destination: 'placeholder', clicked: false }
    ]
  })

  const viewer = useRef(
    new PANOLENS.Viewer({
    container: document.querySelector("#container"),
    cameraFov: 80,
    autoRotate: false,
    autoRotateSpeed: .5,
    autoRotateActivationDuration: 10000,
    autoHideInfospot: false,
    output: 'console'
  }));

  useEffect(() => {
    //first variable is the pano origin, second variable is the pano destination
    //origin.link(destination, ...)
    entrance.link(stairs, new THREE.Vector3(4653.43, -1451.79, -1082.51));
    entrance.link(outside2, new THREE.Vector3(-4843.61, -276.14, -1173.57)); //out
    outside2.link(entrance, new THREE.Vector3(4955.37, 630.34, -19.82)); //in
    stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24)); //down
    stairs.link(tiltas2, new THREE.Vector3(4954.39, 531.99, -260.74)); //up
    tiltas2.link(stairs, new THREE.Vector3(-4873.73, -756.40, -773.44)); //down
    tiltas2.link(fourfloorstairs, new THREE.Vector3(-4941.29, -748.93, -20.76)); //up
    tiltas2.link(loftas1, new THREE.Vector3(4734.32, -1531.18, -474.88)); //tiltas > loftas 
    loftas1.link(tiltas2, new THREE.Vector3(-4171.12, -1991.75, -1895.44)); //loftas > tiltas
    
    //floorL
    loftas1.link(loftas2, new THREE.Vector3(4857.09, -1078.47, -427.68)); //loftas 1>2
    loftas2.link(loftas1, new THREE.Vector3(-4897.78, -967.55, -72.38)); //loftas 2>1
    loftas2.link(loftas3, new THREE.Vector3(4857.09, -1078.47, -427.68)); //loftas 2>3
    loftas3.link(loftas2, new THREE.Vector3(-4840.05, -1240.24, -23.10)); //loftas 3>2
    loftas3.link(loftoranas2, new THREE.Vector3(-1200.96, -1406.38, 4634.93));
    loftas2.link(loftoranas1, new THREE.Vector3(-231.37, -1376.61, 4790.67)); 
    loftas2.link(loftoranas2, new THREE.Vector3(4038.42, -1245.60, 2655.35)); 
    loftoranas1.link(loftas2, new THREE.Vector3(-231.37, -1376.61, 4790.67)); 
    loftoranas1.link(loftoranas2, new THREE.Vector3(-4699.17, -1266.09, -1113.90)); 
    loftoranas2.link(loftas2, new THREE.Vector3(3551.28, -858.46, -3401.73)); 
    loftoranas2.link(loftas3, new THREE.Vector3(4792.60, -1368.03, -240.68)); 
    loftoranas2.link(loftoranas1, new THREE.Vector3(-81.60, -1242.02, -4836.48)); 
    loftoranas2.link(library1, new THREE.Vector3(-2932.67, -1154.00, 3876.01)); //
    library1.link(loftoranas2, new THREE.Vector3(-941.27, -652.66, 4859.56)); //
    library1.link(library2, new THREE.Vector3(-1763.61, -1224.34, -4506.39)); //
    library2.link(library1, new THREE.Vector3(154.43, -1267.75, -4825.41)); //

    //     .link(, new THREE.Vector3()); //
    //floor 4
    fourfloorstairs.link(koridorius4, new THREE.Vector3(-3943.38, -312.74, 3045.03));
    fourfloorstairs.link(fourdotfour, new THREE.Vector3(218.49, -1669.38, -4697.98));
    fourfloorstairs.link(tiltas2, new THREE.Vector3(2943.27, -3890.67, 1067.96));
    koridorius4.link(fourfloorstairs, new THREE.Vector3(4204.75, -866.53, -2549.42));
    fourdotfour.link(fourfloorstairs, new THREE.Vector3(4787.39, -775.48, -1190.78)); //4.4 out
    koridorius4.link(koridorius4d2, new THREE.Vector3(-4894.50, -640.35, 729.99));
    koridorius4.link(fourdotfive, new THREE.Vector3(2328.11, -2134.52, 3867.19));
    fourdotfive.link(koridorius4, new THREE.Vector3(1531.36, -825.21, 4685.55)); //4.5 out
    fourdotfive.link(fourdotthree, new THREE.Vector3(4600.09, -930.60, 1695.57)); //4.5 > 4.3
    koridorius4d2.link(koridorius4, new THREE.Vector3(-4975.22, -391.26, 179.52));
    koridorius4d2.link(fourdotone, new THREE.Vector3(3988.02, -1708.73, 2467.40));
    fourdotone.link(koridorius4d2, new THREE.Vector3(-1093.54, -975.53, -4772.87)); //4.1 out
    koridorius4d2.link(fourdottwo, new THREE.Vector3(4817.75, -884.02, -978.08));
    fourdottwo.link(koridorius4d2, new THREE.Vector3(-4193.43, -1405.33, -2316.68)); //4.2 out
    koridorius4d2.link(fourdotthree, new THREE.Vector3(-4827.34, -798.85, -1025.67));
    fourdotthree.link(koridorius4d2, new THREE.Vector3(-4900.69, -870.69, 384.46)); //4.3 out
    fourdotthree.link(fourdotfive, new THREE.Vector3(-997.88, -3522.27, -3400.54)); //4.3 > 4.5
    
    //Photo floor
    outside2.link(fentrance, new THREE.Vector3(443.24, 53.71, 4974.66)); 
    fentrance.link(outside2, new THREE.Vector3(-4415.62, 1558.35, -1734.37)); // to college entrance
    fentrance.link(fcenter, new THREE.Vector3(4272.43, -2056.22, 1558.92));
    fcenter.link(f1, new THREE.Vector3(-4458.25, -1214.17, 1897.02));
    f1.link(fcenter, new THREE.Vector3(4488.05, -2162.52, 315.05));
    fcenter.link(f2, new THREE.Vector3(-3684.06, -1064.94, -3197.82));
    f2.link(fcenter, new THREE.Vector3(-2271.89, -569.86, -4405.52));
    fcenter.link(f3, new THREE.Vector3(673.81, -1369.85, -4751.21));
    f3.link(fcenter, new THREE.Vector3(293.76, -1155.07, -4848.87));
    fcenter.link(f4, new THREE.Vector3(162.37, -683.65, 4941.59));
    f4.link(fcenter, new THREE.Vector3(-4567.18, -498.56, -1957.10));
    fcenter.link(f5, new THREE.Vector3(2745.75, -695.35, 4109.47));
    f5.link(fcenter, new THREE.Vector3(1275.15, -693.69, -4774.80));

    viewer.current.add(library1, library2, loftoranas1, loftoranas2, entrance, stairs, koridorius4, outside2, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, f1, f2, f3, f4, f5, fentrance, fcenter, tiltas2);
  }, [library1, library2, loftoranas2, loftoranas1, entrance, koridorius4, stairs, outside2, tiltas2, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, f1, f2, f3, f4, f5, fentrance, fcenter, viewer]);

  useEffect(() => {
    if (entered) {
      //show pano
      document.getElementById('container').className = '';
    } else if (!entered) {
      //hide pano
      document.getElementById('container').className = 'display-none';
    }
    return () => {
      //cleanup duplicate styles
      Array.from(document.querySelectorAll('#panolens-style-addon')).slice(1, 100).forEach(el => el.remove());

      //cleanup unwanted container children
      let c = Array.from(document.querySelector('#container').children);
      for (let i = 3; i < c.length; i++) {
        if (!c[i].className.includes('infospot')) c[i].remove();
      }
    }
  }, [entered])

  return (
    <>
      {entered ? '' : <Banner entered={entered} setEntered={setEntered} />}
      <NavContainer allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered}/>
    </>
  );
}

export default App;
