import './App.scss';
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';
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

import * as PANOLENS from "panolens";
import * as THREE from 'three';

import { useEffect, useMemo, useRef, useState } from "react";


function App() {
  const entrance = useMemo(() => new PANOLENS.ImagePanorama(entrance2), []);
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

  const[allDots] = useState({
    'entrance': [
      // dot 1 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: entrance, clicked: true},
      // dot 2 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: stairs, clicked: false},
      // dot 3 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: outside2, clicked: false}
    ],
    'f': [
      // dot 1 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 2 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 3 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 4 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 5 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 6 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 7 for f pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'}
    ], 
    'four': [
      // dot 1 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: fourfloorstairs, clicked: false},
      // dot 2 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: koridorius4, clicked: false},
      // dot 3 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: koridorius4d2, clicked: false},
      // dot 4 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: fourdotone, clicked: false},
      // dot 5 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: fourdottwo, clicked: false},
      // dot 6 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: fourdotthree, clicked: false}


    ],
    'loftas': [
        // dot 1 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: tiltas2, clicked: false},
        // dot 2 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: loftas1, clicked: false},
        // dot 3 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: loftas2, clicked: false},
        // dot 4 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: loftas3, clicked: false},
        // dot 5 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 6 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 7 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 8 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 9 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 10 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 11 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 12 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 13 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 14 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 15 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 16 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 17 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 18 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 19 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 20 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 21 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 22 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 23 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'}
    ]
  })

  const [entered, setEntered] = useState(false);

  const viewer = useRef(
    new PANOLENS.Viewer({
      container: document.querySelector("#container"),
      cameraFov: 80,
      autoRotate: false,
      autoRotateSpeed: .5,
      autoRotateActivationDuration: 10000,
      autoHideInfospot: false,
      output: 'console' 
    })
  );

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

    //  
    viewer.current.add(entrance, stairs, koridorius4, outside2, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, tiltas2);
  }, [entrance, koridorius4, stairs, outside2, tiltas2, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, viewer]);
  
  useEffect(() => {
    ('effect2');
    if(entered) {
      //show pano
      document.getElementById('container').className = '';
    } else if(!entered) {
      //hide pano
      document.getElementById('container').className = 'display-none';
    }
    return () => {
      //cleanup duplicate panos
      Array.from(document.querySelector('#container').children).slice(3, 100).forEach(el => el.remove())
      Array.from(document.querySelector('#panolens-style-addon').children).slice(0, 100).forEach(el => el.remove())
    }
  }, [entered])

  return (
    <>
      {entered ? '' : <Banner entered={entered} setEntered={setEntered}/>}
      {entered ? <NavTop allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered}/> : ''}
      {entered ? <NavLeft /> : ''}
    </>
  );
}

export default App;
