import { useState } from 'react';

import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

import entrance from '../assets/floor-plans/entrance.png';

//loftas
import loftas from '../assets/floor-plans/loftas/loftas.png';
import gd from '../assets/floor-plans/loftas/floorlgkd.png';
import id from '../assets/floor-plans/loftas/floorlinterior.png';
import fd from '../assets/floor-plans/loftas/floorlfashion.png';
import ap from '../assets/floor-plans/loftas/floorlphotography.png';
import pa from '../assets/floor-plans/loftas/floorlperformance.png';

//floor 4
import four from '../assets/floor-plans/4/four.png';
import fourgd from '../assets/floor-plans/4/floor4gkd.png'
import fourfashion from '../assets/floor-plans/4/floor4fashion.png'

//floor f
import f from '../assets/floor-plans/f/f.png';
import fphoto from '../assets/floor-plans/f/floorfphoto.png';

const NavContainer = ({allDots, viewer, entered, setEntered}) => {
  const [category, setCategory] = useState('');
  const [planImage, setPlanImage] = useState('');
  const [currentFloor, setCurrentFloor] = useState('');
  const [floors] = useState(
    {
      //do not change the below 4 lines or reorder them
      'Entrance': entrance,
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

  return (
    <>
      {entered ? <NavTop planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} planImage={planImage} setPlanImage={setPlanImage} category={category} allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered} /> : ''}
      {entered ? <NavLeft planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} planImage={planImage} setPlanImage={setPlanImage} category={category} setCategory={setCategory} /> : ''}
    </>
  );
};

export default NavContainer;
