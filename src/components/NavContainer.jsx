import { useState, useEffect, useMemo } from "react";

import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

import entrance2 from './../assets/panos/entrance.jpg'
import stairs2 from './../assets/panos/stairs.jpg';
import koridorius4ds from './../assets/panos/koridorius4ds.jpg';
import outside from './../assets/panos/outside.jpg';
import tiltas from './../assets/panos/tiltas.jpg';
import fourfloorstairss from './../assets/panos/fourfloorstairss.jpg';
import koridorius42 from './../assets/panos/koridorius42.jpg';
import fourfour from './../assets/panos/fourfour.jpg';
import fourfive from './../assets/panos/fourfive.jpg';
import fourone from './../assets/panos/fourone.jpg';
import fourtwo from './../assets/panos/fourtwo.jpg';
import fourthree from './../assets/panos/fourthree.jpg';
import loftas12 from './../assets/panos/loftas12.jpg';
import loftas22 from './../assets/panos/loftas22.jpg';
import loftas32 from './../assets/panos/loftas32.jpg';
import fentrances from './../assets/panos/fentrance.jpg';
import fcenters from './../assets/panos/fcenter.jpg';
import f1s from './../assets/panos/f1.jpg';
import f2s from './../assets/panos/f2.jpg';
import f3s from './../assets/panos/f3.jpg';
import f4s from './../assets/panos/f4.jpg';
import f5s from './../assets/panos/f5.jpg';
import loftoranas1d from './../assets/panos/loftoranas1.jpg';
import loftoranas2d from './../assets/panos/loftoranas2.jpg';
import libraryd1 from './../assets/panos/library1.jpg';
import libraryd2 from './../assets/panos/library2.jpg';
import lk1ks from './../assets/panos/lk1k.jpg';
import lk2ks from './../assets/panos/lk2k.jpg';
import lsks from './../assets/panos/lsk.jpg';
import lt1ks from './../assets/panos/lt1k.jpg';
import lt2ks from './../assets/panos/lt2k.jpg';
import ltks from './../assets/panos/ltk.jpg';
import l10ks from './../assets/panos/l10k.jpg';

import l1s from './../assets/panos/l1.jpg';
import l2s from './../assets/panos/l2.jpg';
import l3s from './../assets/panos/l3.jpg';
import l5s from './../assets/panos/l5.jpg';
import l7s from './../assets/panos/l7.jpg';
import l9s from './../assets/panos/l9.jpg';
import l10s from './../assets/panos/l10.jpg';
import lds from './../assets/panos/ld.jpg';
import ljs from './../assets/panos/lj.jpg';
import lk1s from './../assets/panos/lk1.jpg';
import lk2s from './../assets/panos/lk2.jpg';
import ls1s from './../assets/panos/ls1.jpg';
import ls2s from './../assets/panos/ls2.jpg';
import lt1s from './../assets/panos/lt1.jpg';
import l8s from './../assets/panos/l8.jpg';

import hsimg from './../assets/infospots/hotspotimage.png';

import * as PANOLENS from "panolens";
import * as THREE from 'three';

import entranceImage from './../assets/floor-plans/entrance.png';

//loftas
import loftas from './../assets/floor-plans/loftas/loftas.png';
import gd from './../assets/floor-plans/loftas/floorlgkd.png';
import id from './../assets/floor-plans/loftas/floorlinterior.png';
import fd from './../assets/floor-plans/loftas/floorlfashion.png';
import ap from './../assets/floor-plans/loftas/floorlphotography.png';
import pa from './../assets/floor-plans/loftas/floorlperformance.png';

//floor 4
import four from './../assets/floor-plans/4/four.png';
import fourgd from './../assets/floor-plans/4/floor4gkd.png'
import fourfashion from './../assets/floor-plans/4/floor4fashion.png'

//floor f
import f from './../assets/floor-plans/f/f.png';
import fphoto from './../assets/floor-plans/f/floorfphoto.png';

const NavContainer = ({entered, setEntered}) => {
  const [category, setCategory] = useState('');
  const [planImage, setPlanImage] = useState('');
  const [currentFloor, setCurrentFloor] = useState('');

  let panoWithInfoSpots = (image, infospots=[]) => {
    let pano = new PANOLENS.ImagePanorama(image);
    for (let i = 0; i < infospots.length; i++) {

      //the 350 on the next line changes the infospot size
      // let infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
      let infospot = new PANOLENS.Infospot(350, window.location + '/spot.png');
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
  
  // const loftas3 = useMemo(() => new PANOLENS.ImagePanorama(loftas32), []);
  const loftas3 = useMemo(() => panoWithInfoSpots(
    loftas32,
    [
      //entrance info spots
      {
        coords: [-3730.63, 361.44, -3304,71],
        text: 'Administration'
      },
      {
        coords: [3539.18, -2027.37, 2876.35],
        text: 'Sign for coffee'
      },
      {
        coords: [4617.09, 37.02, -1901.04],
        text: 'Toilet'
      },
    ]
  ), []);
  
  const loftas2 = useMemo(() => panoWithInfoSpots(
    loftas22,
    [
      {
        coords: [-4763.57, 80.59, -1501.93],
        text: 'L1 Auditorium'
      },
      {
        coords: [4575.39, 252.16, -1986.10],
        text: 'Administration'
      },
    ]
  ), []);


  const loftas1 = useMemo(() => panoWithInfoSpots(
    loftas12,
    [
      {
        coords: [4265.37, -46.05, -2596.40],
        text: 'L1 Auditorium'
      },
      {
        coords: [-581.21, -136.62, 4957.91],
        text: 'Toilet'
      },
    ]
  ), []);
  
  const loftoranas2 = useMemo(() => panoWithInfoSpots(
    loftoranas2d,
    [
      {
        coords: [-2917.08, 40.53, 4057.38],
        text: 'Library'
      },
      {
        coords: [-4671.31, -224.31, -1739.29],
        text: 'Coffee'
      },
    ]

  ), []);
  const loftoranas1 = useMemo(() => panoWithInfoSpots(
    loftoranas1d,
    [
      {
        coords: [4448.37, 1059.53, -2011.17],
        text: 'Menu'
      },
      {
        coords: [-792.93, -240.22, -4920.26],
        text: 'Coffee'
      },
    ]
  ), []);
  
  const lk1k = useMemo(() => panoWithInfoSpots(
    lk1ks,
    [
      {
        coords: [3282.33, 306.81, 3751.51],
        text: 'LK1 Auditorium'
      },
    ]
  ), []);

  const lk2k = useMemo(() => panoWithInfoSpots(
    lk2ks,
    [
      {
        coords: [-3394.40, 253.49, 3652.91],
        text: 'LK2 Auditorium'
      },
      {
        coords: [3486.17, 415.76, -3549.52],
        text: 'L2 Auditorium'
      },
    ]
  ), []);

  const lsk = useMemo(() => panoWithInfoSpots(
    lsks,
    [
      {
        coords: [4783.37, 142.65, -1418.65],
        text: 'L3 Auditorium'
      },
      {
        coords: [-53.60, 89.55, 4993.67],
        text: 'LS1 & LS2 Auditorium'
      },
    ]
  ), []);

  const lt1k = useMemo(() => panoWithInfoSpots(
    lt1ks,
    [
      {
        coords: [-4682.31, 186.80, -1714.75],
        text: 'L3 Auditorium'
      },
      {
        coords: [1.07, 705.31, 4947.48],
        text: 'LT1 Auditorium'
      },
    ]
  ), []);

  const lt2k = useMemo(() => panoWithInfoSpots(
    lt2ks,
    [
      {
        coords: [-419.63, 451.62, 4955.57],
        text: 'LT2 Entrance'
      },
      {
        coords: [-4668.92, 230.95, 1744.78],
        text: 'LT5 Auditorium'
      },
      {
        coords: [2918.30, -217.36, -4048.31],
        text: 'Toilets'
      },
    ]
  ), []);

  const ltk = useMemo(() => panoWithInfoSpots(
    ltks,
    [
      {
        coords: [4400.56, 620.68, 2268.41],
        text: 'LJ'
      },
      {
        coords: [4918.88, 350.48, -773.97],
        text: 'L8 Auditorium'
      },
      {
        coords: [3679.29, 164.87, -3372.94],
        text: 'LD'
      },
    ]
  ), []);
  
  const l10k = useMemo(() => panoWithInfoSpots(
    l10ks,
    [
      {
        coords: [4703.26, 165.03, -1662.54],
        text: 'L9 Auditorium'
      },
      {
        coords: [-1183.54, 506.90, -4822.20],
        text: 'L10 Auditorium'
      },
      {
        coords: [4271.03, 840.53, 2455.03],
        text: 'L7 Auditorium'
      },
    ]
  ), []);
    
  const ls1 = useMemo(() => panoWithInfoSpots(
    ls1s,
    [
      {
        coords: [-4671.10, -6.70, -1763.66],
        text: 'LS2 Auditorium'
      },
    ]
  ), []);
  
  const fourfloorstairs = useMemo(() => panoWithInfoSpots(
    fourfloorstairss,
    [
      {
        coords: [-169.98, 73.45, -4988.21],
        text: '4 Auditorium'
      },
      {
        coords: [3167.63, 258.33, 3846.85],
        text: 'Toilets'
      },
    ]
  ), []);

  const koridorius4 = useMemo(() => panoWithInfoSpots(
    koridorius4ds,
    [
      {
        coords: [2165.56, 1074.52, 4366.36],
        text: '4 Auditorium'
      },
    ]
  ), []);
  
  const koridorius4d2 = useMemo(() => panoWithInfoSpots(
    koridorius42,
    [
      {
        coords: [4064.28, 984.77, 2722.60],
        text: '1 Auditorium'
      },
      {
        coords: [4835.36, 609.73, -1087.48],
        text: '2 Auditorium'
      },
      {
        coords: [-4887.09, 269.13, -995.09],
        text: '3 Auditorium'
      },
    ]
  ), []);
   
  const fcenter = useMemo(() => panoWithInfoSpots(
    fcenters,
    [
      {
        coords: [616.67, 521.45, -4926.68],
        text: 'F3 Auditorium'
      },
      {
        coords: [-3877.68, 103.39, -3139.21],
        text: 'F2 Auditorium'
      },
      {
        coords: [-4616.60, 418.23, 1854.87],
        text: 'F1 Auditorium'
      },
      {
        coords: [208.31, 212.53, 4980.73],
        text: 'F4 Auditorium'
      },
      {
        coords: [2771.28, 240.82, 4142.69],
        text: 'F5 Auditorium'
      },
      {
        coords: [4886.29, -0.63, 1056.08],
        text: 'Technician'
      },
    ]
  ), []);
  
  const stairs = useMemo(() => new PANOLENS.ImagePanorama(stairs2), []);
  //const koridorius4 = useMemo(() => new PANOLENS.ImagePanorama(koridorius4ds), []);
  const outside2 = useMemo(() => new PANOLENS.ImagePanorama(outside), []);
  const tiltas2 = useMemo(() => new PANOLENS.ImagePanorama(tiltas), []);
  //const fourfloorstairs = useMemo(() => new PANOLENS.ImagePanorama(fourfloorstairss), []);
  //const koridorius4d2 = useMemo(() => new PANOLENS.ImagePanorama(koridorius42), []);
  const fourdotfour = useMemo(() => new PANOLENS.ImagePanorama(fourfour), []);
  const fourdotfive = useMemo(() => new PANOLENS.ImagePanorama(fourfive), []);
  const fourdotone = useMemo(() => new PANOLENS.ImagePanorama(fourone), []);
  const fourdottwo = useMemo(() => new PANOLENS.ImagePanorama(fourtwo), []);
  const fourdotthree = useMemo(() => new PANOLENS.ImagePanorama(fourthree), []);
  //const loftas1 = useMemo(() => new PANOLENS.ImagePanorama(loftas12), []);
  //const loftas2 = useMemo(() => new PANOLENS.ImagePanorama(loftas22), []);
  const fentrance = useMemo(() => new PANOLENS.ImagePanorama(fentrances), []);
  //const fcenter = useMemo(() => new PANOLENS.ImagePanorama(fcenters), []);
  const f1 = useMemo(() => new PANOLENS.ImagePanorama(f1s), []);
  const f2 = useMemo(() => new PANOLENS.ImagePanorama(f2s), []);
  const f3 = useMemo(() => new PANOLENS.ImagePanorama(f3s), []);
  const f4 = useMemo(() => new PANOLENS.ImagePanorama(f4s), []);
  const f5 = useMemo(() => new PANOLENS.ImagePanorama(f5s), []);
  //const loftoranas1 = useMemo(() => new PANOLENS.ImagePanorama(loftoranas1d), []);
  //const loftoranas2 = useMemo(() => new PANOLENS.ImagePanorama(loftoranas2d), []);
  const library1 = useMemo(() => new PANOLENS.ImagePanorama(libraryd1), []);
  const library2 = useMemo(() => new PANOLENS.ImagePanorama(libraryd2), []);
  //const lk1k = useMemo(() => new PANOLENS.ImagePanorama(lk1ks), []);
  //const lk2k = useMemo(() => new PANOLENS.ImagePanorama(lk2ks), []);
  //const lsk = useMemo(() => new PANOLENS.ImagePanorama(lsks), []);
  //const lt1k = useMemo(() => new PANOLENS.ImagePanorama(lt1ks), []);
  //const lt2k = useMemo(() => new PANOLENS.ImagePanorama(lt2ks), []);
  //const ltk = useMemo(() => new PANOLENS.ImagePanorama(ltks), []);
  //const l10k = useMemo(() => new PANOLENS.ImagePanorama(l10ks), []);
// \/auditoriums
  const l1 = useMemo(() => new PANOLENS.ImagePanorama(l1s), []);
  const l2 = useMemo(() => new PANOLENS.ImagePanorama(l2s), []);
  const l3 = useMemo(() => new PANOLENS.ImagePanorama(l3s), []);
  const l5 = useMemo(() => new PANOLENS.ImagePanorama(l5s), []);
  const l7 = useMemo(() => new PANOLENS.ImagePanorama(l7s), []);
  const l9 = useMemo(() => new PANOLENS.ImagePanorama(l9s), []);
  const l10 = useMemo(() => new PANOLENS.ImagePanorama(l10s), []);
  const lk1 = useMemo(() => new PANOLENS.ImagePanorama(lk1s), []);
  const lk2 = useMemo(() => new PANOLENS.ImagePanorama(lk2s), []);
  //const ls1 = useMemo(() => new PANOLENS.ImagePanorama(ls1s), []);
  const ls2 = useMemo(() => new PANOLENS.ImagePanorama(ls2s), []);
  const lj = useMemo(() => new PANOLENS.ImagePanorama(ljs), []);
  const ld = useMemo(() => new PANOLENS.ImagePanorama(lds), []);
  const lt1 = useMemo(() => new PANOLENS.ImagePanorama(lt1s), []);
  const l8 = useMemo(() => new PANOLENS.ImagePanorama(l8s), []);

  // const  = useMemo(() => new PANOLENS.ImagePanorama(), []);

  const [allDots] = useState({
    'entrance': [
      // dot 1 for entrance pano
      { top: '3rem', left: '-19rem', destination: entrance, clicked: false },
      // dot 2 for entrance pano
      { top: '-10.2px', left: '-28.1rem', destination: stairs, clicked: false },
      // dot 3 for entrance pano
      { top: '8px', left: '-14rem', destination: outside2, clicked: false } 
    ],
    'f': [
      // dot 1 for f pano
      {  left: '-28.1rem', top: '5.3rem', destination: fentrance, clicked: false },
      // dot 2 for f pano
      {  left: '-23.3rem', top: '4.1rem', destination: fcenter, clicked: false },
      // dot 3 for f pano
      {  left: '-20.7rem', top: '3rem', destination: f1, clicked: false },
      // dot 4 for f pano
      {  left: '-22.2rem', top: '-1.3rem', destination: f2, clicked: false },
      // dot 5 for f pano
      {  left: '-25.45rem', top: '-1.4rem', destination: f3, clicked: false },
      // dot 6 for f pano
      {  left: '-20.5rem', top: '3.8rem', destination: f4, clicked: false },
      // dot 7 for f pano
      {  left: '-25.3rem', top: '1.7rem', destination: f5, clicked: false }
    ],
    'four': [
      // dot 1 for four pano
      { top: '10.9rem', left: '-25rem', destination: fourfloorstairs, clicked: false },
      // dot 2 for four pano
      { top: '9.6rem', left: '-23.7rem', destination: koridorius4, clicked: false },
      // dot 3 for four pano
      { top: '0.5em', left: '-23.6rem', destination: koridorius4d2, clicked: false },
      // dot 4 for four pano
      { top: '-1.9rem', left: '-26.5rem', destination: fourdotone, clicked: false },
      // dot 5 for four pano
      { top: '-5.1rem', left: '-22.5rem', destination: fourdottwo, clicked: false },
      // dot 6 for four pano
      { top: '-2.2rem', left: '-20.9rem', destination: fourdotthree, clicked: false },
      // dot 7
      { top: '2.6rem', left: '-20.9rem', destination: fourdotfive, clicked: false },
      // dot 8
      { top: '-0.6rem', left: '-26.7rem', destination: fourdotfour, clicked: false }

    ],
    'loftas': [
      // dot 1 for loftas pano
      { top: '1.5rem', left: '8rem', destination: tiltas2, clicked: false },
      // dot 2 for loftas pano
      { top: '1.3rem', left: '4rem', destination: loftas1, clicked: false },
      // dot 3 for loftas pano
      { top: '-0.05rem', left: '1.2rem', destination: loftas2, clicked: false },
      // dot 4 for loftas pano
      { top: '-1.35rem', left: '-2.7rem', destination: loftas3, clicked: false },
      // dot 5 for loftas pano
      { top: '0rem', left: '1.7rem', destination: loftoranas1, clicked: false },
      // dot 6 for loftas pano
      { top: '-1.2rem', left: '-2.4rem', destination: loftoranas2, clicked: false },
      // dot 7 for loftas pano
      { top: '-1.4rem', left: '-4.4rem', destination: library1, clicked: false },
      // dot 8 for loftas pano
      { top: '-2.65rem', left: '-7.4rem', destination: library2, clicked: false },
      // dot 9 for loftas pano
      { top: '-8rem', left: '-5.8rem', destination: lk1k, clicked: false },
      // dot 10 for loftas pano
      { top: '-7.6rem', left: '-7rem', destination: lk1, clicked: false },
      // dot 11 for loftas pano
      { top: '-10.6rem', left: '-9.6rem', destination: lk2k, clicked: false },
      // dot 12 for loftas pano
      { top: '-10.1rem', left: '-9.6rem', destination: lk2, clicked: false },
      // dot 13 for loftas pano
      { top: '-14.8rem', left: '-10rem', destination: l2, clicked: false },
      // dot 14 for loftas pano
      { top: '-14rem', left: '-13.6rem', destination: lsk, clicked: false },
      // dot 15 for loftas pano
      { top: '-10.5rem', left: '-13rem', destination: ls1, clicked: false },
      // dot 16 for loftas pano
      { top: '-11.7rem', left: '-10rem', destination: ls2, clicked: false },
      // dot 17 for loftas pano
      { top: '-18rem', left: '-16.5rem', destination: lt1k, clicked: false },
      // dot 18 for loftas pano
      { top: '-17.9rem', left: '-15.4rem', destination: lt1, clicked: false },
      // dot 19 for loftas pano
      { top: '-22.1rem', left: '-14rem', destination: l3, clicked: false },
      // dot 20 for loftas pano
      { top: '-21.8rem', left: '-20.1rem', destination: lt2k, clicked: false },
      // dot 21 for loftas pano
      { top: '-20.4rem', left: '-20.45rem', destination: ltk, clicked: false },
      // dot 22 for loftas pano
      { top: '-19.2rem', left: '-17.25rem', destination: lj, clicked: false },
      // dot 23 for loftas pano
      { top: '-23.1rem', left: '-21.7rem', destination: ld, clicked: false },
      // dot 24 for loftas pano
      { top: '-23.9rem', left: '-26.9rem', destination: l10, clicked: false },
      // dot 25
      { top: '-25.1rem', left: '-24.2rem', destination: l9, clicked: false },
      // dot 26
      { top: '-31rem', left: '-23.9rem', destination: l7, clicked: false },
      // dot 27
      { top: '-30.65rem', left: '-25.5rem', destination: l10k, clicked: false },
      // dot 28
      { top: '-33.5rem', left: '-19.1rem', destination: l5, clicked: false },
      // dot 29
      { top: '-27.4rem', left: '-21.7rem', destination: l8, clicked: false },
      // dot 30
      { top: '-35.8rem', left: '3.2rem', destination: l1, clicked: false },
    ]
  })

  const viewer = useMemo(() =>
    new PANOLENS.Viewer({
    container: document.querySelector("#container"),
    cameraFov: 80,
    autoRotate: false,
    autoRotateSpeed: .5,
    autoRotateActivationDuration: 10000,
    autoHideInfospot: false,
    output: 'console'
  }), []);

  useEffect(() => {
    //first variable is the pano origin, second variable is the pano destination
    //origin.link(destination, ..., 300, window.location + '/arrows/name.png');
    entrance.link(stairs, new THREE.Vector3(4653.43, -1451.79, -1082.51));    
    entrance.link(outside2, new THREE.Vector3(-4843.61, -276.14, -1173.57));
    outside2.link(entrance, new THREE.Vector3(4980.96, 417.63, 12.00), 300, window.location + '/arrows/arrow.png');
    stairs.link(entrance, new THREE.Vector3(3725.45, -3094.47, 1225.24)); //down
    stairs.link(tiltas2, new THREE.Vector3(4954.39, 531.99, -260.74)); //up
    tiltas2.link(stairs, new THREE.Vector3(-4873.73, -756.40, -773.44)); //down
    tiltas2.link(fourfloorstairs, new THREE.Vector3(-4941.29, -748.93, -20.76)); //up
    tiltas2.link(loftas1, new THREE.Vector3(4870.73, -1010.71, -424.59)); //tiltas > loftas 
    loftas1.link(tiltas2, new THREE.Vector3(-4593.61, -1002.42, -1672.63)); //loftas > tiltas
    
    //floorL
    loftas1.link(loftas2, new THREE.Vector3(4857.09, -1078.47, -427.68)); //loftas 1>2
    loftas2.link(loftas1, new THREE.Vector3(-4897.78, -967.55, -72.38)); 
    loftas2.link(loftas3, new THREE.Vector3(4857.09, -1078.47, -427.68)); //loftas 2>3
    loftas3.link(loftas2, new THREE.Vector3(-4840.05, -1240.24, -23.10)); 
    loftas3.link(loftoranas2, new THREE.Vector3(-398.44, -1315.36, 4799.19));
    loftas2.link(loftoranas1, new THREE.Vector3(-231.37, -1376.61, 4790.67)); 
    loftas2.link(loftoranas2, new THREE.Vector3(4038.42, -1245.60, 2655.35)); 
    loftoranas1.link(loftas2, new THREE.Vector3(-1227.47, -1351.08, 4643.95)); 
    loftoranas1.link(loftoranas2, new THREE.Vector3(-4699.17, -1266.09, -1113.90)); 
    loftoranas2.link(loftas2, new THREE.Vector3(3551.28, -858.46, -3401.73)); 
    loftoranas2.link(loftas3, new THREE.Vector3(4756.95, -1299.83, 763.61)); 
    loftoranas2.link(loftoranas1, new THREE.Vector3(-81.60, -1242.02, -4836.48)); 
    loftoranas2.link(library1, new THREE.Vector3(-2932.67, -1154.00, 3876.01)); 
    library1.link(loftoranas2, new THREE.Vector3(-941.27, -652.66, 4859.56)); 
    library1.link(library2, new THREE.Vector3(-1763.61, -1224.34, -4506.39)); 
    library2.link(library1, new THREE.Vector3(154.43, -1267.75, -4825.41)); 
    loftas3.link(lk1k, new THREE.Vector3(4902.25, -876.56, -332.34)); 
    lk1k.link(lk2k, new THREE.Vector3(4871.19, -1113.92, 24.12)); 
    lk1k.link(loftas3, new THREE.Vector3(-4922.33, -835.01, 106.94)); 
    lk2k.link(lsk, new THREE.Vector3(4907.60, -930.07, 27.23)); 
    lk2k.link(lk1k, new THREE.Vector3(-4834.63, -1224.92, 208.88)); 
    lsk.link(lt1k, new THREE.Vector3(4866.63, -1119.28, -90.74)); 
    lsk.link(lk2k, new THREE.Vector3(-4914.22, -901.67, -8.58)); 
    lt1k.link(lt2k, new THREE.Vector3(4899.21, -968.01, 43.29)); 
    lt1k.link(lsk, new THREE.Vector3(-4844.84, -1201.91, 137.94)); 
    lt2k.link(ltk, new THREE.Vector3(3128.57, -872.04, 3789.44)); 
    lt2k.link(lt1k, new THREE.Vector3(-3708.28, -1018.41, 3182.59));
    ltk.link(lt2k, new THREE.Vector3(-4860.91, -1118.93, -201.22));
    l10k.link(lt2k, new THREE.Vector3(4945.12, -708.68, -38.52));
    lt2k.link(l10k, new THREE.Vector3(3744.60, -1097.39, -3112.81)); 

    loftas1.link(l1, new THREE.Vector3(4242.92, -647.23, -2550.70));
    loftas2.link(l1, new THREE.Vector3(-4756.24, -436.92, -1461.67)); 
    l1.link(loftas2, new THREE.Vector3(-2149.23, -605.32, -4432.29));
    lk1k.link(lk1, new THREE.Vector3(3311.52, -1361.67, 3477.30)); 
    lk1.link(lk1k, new THREE.Vector3(3516.03, -814.01, 3449.47)); 
    lk2k.link(lk2, new THREE.Vector3(-3356.43, -1177.64, 3505.69));
    lk2k.link(l2, new THREE.Vector3(3426.89, -1280.19, -3394.38));
    lk2.link(lk2k, new THREE.Vector3(-3005.80, -1710.97, 3597.83));
    l2.link(lk2k, new THREE.Vector3(-4814.39, -926.77, -945.00));
    lsk.link(ls1, new THREE.Vector3(-36.98, -351.72, 4984.24)); 
    lsk.link(l3, new THREE.Vector3(4794.12, -388.38, -1341.27)); 
    ls1.link(lsk, new THREE.Vector3(2785.62, -457.67, -4117.08)); 
    ls1.link(ls2, new THREE.Vector3(-2342.27, -551.74, -4372.07)); 
    ls2.link(ls1, new THREE.Vector3(3839.85, -573.80, -3133.82)); 
    lt1k.link(l3, new THREE.Vector3(-4644.00, -437.45, -1777.14)); 
    lt1k.link(lt1, new THREE.Vector3(307.56, -1621.37, 4711.02)); 
    l3.link(lt1k, new THREE.Vector3(2333.98, -459.01, -4388.59)); 
    lt2k.link(lt1, new THREE.Vector3(-532.82, -1147.11, 4835.36)); 
    lt1.link(lt1k, new THREE.Vector3(-4869.84, -1056.77, -266.71)); 
    lt2k.link(l5, new THREE.Vector3(-4592.16, -789.53, 1794.41)); 
    l5.link(lt2k, new THREE.Vector3(-4006.18, -851.99, 2860.51)); 
    ltk.link(lj, new THREE.Vector3(4238.11, -1194.30, 2359.91));
    lj.link(ltk, new THREE.Vector3(-4916.68, -534.56, -669.88));
    ltk.link(ld, new THREE.Vector3(3673.69, -1405.72, -3071.60));
    ld.link(ltk, new THREE.Vector3(-609.17, -411.75, -4940.99));
    ltk.link(l8, new THREE.Vector3(4880.74, -801.81, -684.75));
    l10k.link(l9, new THREE.Vector3(4665.40, -550.99, -1683.94));
    l9.link(l10k, new THREE.Vector3(-4521.77, -422.68, 2082.06));
    l10k.link(l10, new THREE.Vector3(-1350.30, -1364.44, -4607.15));
    l10.link(l10k, new THREE.Vector3(4411.27, -318.46, -2313.22));
    l10k.link(l7, new THREE.Vector3(4235.78, -1165.03, 2382.23));
    l7.link(l10k, new THREE.Vector3(-4801.88, -1023.34, -901.36));
    l8.link(ltk, new THREE.Vector3(4433.86, -790.32, -2157.44));

    //     .link(, new THREE.Vector3()); 

    //floor 4
    fourfloorstairs.link(koridorius4, new THREE.Vector3(-2849.17, -3480.70, 2172.33));
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
    fcenter.link(fentrance, new THREE.Vector3(4868.78, 115.29, -1104.05));
    f1.link(fcenter, new THREE.Vector3(4752.92, -1482.75, 380.56));
    fcenter.link(f2, new THREE.Vector3(-3739.14, -909.05, -3179.00));
    f2.link(fcenter, new THREE.Vector3(-2029.04, -1158.68, -4417.16));
    fcenter.link(f3, new THREE.Vector3(673.81, -1369.85, -4751.21));
    f3.link(fcenter, new THREE.Vector3(293.76, -1155.07, -4848.87));
    fcenter.link(f4, new THREE.Vector3(162.37, -683.65, 4941.59));
    f4.link(fcenter, new THREE.Vector3(-4513.10, -852.68, -1965.36));
    fcenter.link(f5, new THREE.Vector3(2745.75, -695.35, 4109.47));
    f5.link(fcenter, new THREE.Vector3(1275.15, -693.69, -4774.80));

    viewer.add(outside2, entrance, lsk, l8, lt1, l10k, lk1k, lk2k, lt1k, lt2k, ltk, l1, l2, l3, l5, l7, l9, l10, lk1, lk2, ls1, ls2, lj, ld, library1, library2, loftoranas1, loftoranas2,  stairs, koridorius4, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, f1, f2, f3, f4, f5, fentrance, fcenter, tiltas2);
  }, [l10k, lk1k, lk2k, lsk, lt1k, lt2k, ltk, l1, l8, l2, l3, l5, l7, l9, l10, lk1, lk2, ls1, ls2, lj, ld ,lt1, library1, library2, loftoranas2, loftoranas1, entrance, koridorius4, stairs, outside2, tiltas2, fourfloorstairs, koridorius4d2, fourdotfive, fourdotfour, fourdotone, fourdottwo, fourdotthree, loftas1, loftas2, loftas3, f1, f2, f3, f4, f5, fentrance, fcenter, viewer]);


  const [floors] = useState(
    {
      //do not change the below 4 lines or reorder them
      'Entrance': entranceImage,
      'Loftas': loftas,
      'Floor 4': four,
      'Floor F': f
    }
  );

  const [planImages] = useState(
    {
      'Entrance': {},
      'Loftas': {
        'Graphic Design': gd,
        'Interior Design': id,
        'Fashion Design': fd,
        'Applied Photography': ap,
        'Performance Acting': pa
      }, 
      'Floor 4': {
        'Graphic Design': fourgd,
        'Fashion Design': fourfashion
      }, 
      'Floor F': {
        'Applied Photography': fphoto
      }, 
    }
  );

  
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
  }, [entered, category, currentFloor])

  return (
    <>
      <NavTop planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} planImage={planImage} setPlanImage={setPlanImage} category={category} allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered} />
      <NavLeft planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} planImage={planImage} setPlanImage={setPlanImage} category={category} setCategory={setCategory} />
    </>
  );
};

export default NavContainer;
