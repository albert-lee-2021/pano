import './App.scss';
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';
import Banner from './components/Banner';

import entrance2 from './assets/panos/entrance.jpg'
import stairs2 from './assets/panos/stairs.jpg';
import koridorius4ds from './assets/panos/koridorius4ds.jpg';

import * as PANOLENS from "panolens";
import * as THREE from 'three';

import { useEffect, useMemo, useRef, useState } from "react";


function App() {
  const entrance = useMemo(() => new PANOLENS.ImagePanorama(entrance2), []);
  const stairs = useMemo(() => new PANOLENS.ImagePanorama(stairs2), []);
  const koridorius4 = useMemo(() => new PANOLENS.ImagePanorama(koridorius4ds), []);
  const[allDots] = useState({
    'entrance': [
      // dot 1 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: entrance, clicked: true},
      // dot 2 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: stairs, clicked: false},
      // dot 3 for entrance pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: koridorius4, clicked: false}
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
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 2 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 3 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 4 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 5 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
      // dot 6 for four pano
      {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'}
    ],
    'loftas': [
        // dot 1 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 2 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 3 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
        // dot 4 for loftas pano
        {top: '10rem', bottom: '10rem', left: '10rem', right: '10rem', destination: 'placeholder'},
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
    entrance.link(koridorius4, new THREE.Vector3(-4798.75, -557.63, -1247.87));
    stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24));
    stairs.link(entrance, new THREE.Vector3(4954.39, 531.99, -260.74));
  
    viewer.current.add(entrance, stairs, koridorius4);
  }, [entrance, koridorius4, stairs, viewer]);
  
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
