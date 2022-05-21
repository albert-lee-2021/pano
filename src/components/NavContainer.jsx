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
  const [plan, setPlan] = useState('');
  const [currentFloor, setCurrentFloor] = useState('Entrance');
  const [floors] = useState(
    {
      //do not change the below 4 lines or reorder them
      'Entrance': entrance,
      'Loftas': loftas,
      'Floor 4': four,
      'Floor F': f,
  
      //loftas categories
      'Graphic Design': gd,
      'Interior Design': id,
      'Fashion Design': fd,
      'Applied Photography': ap,
      'Performance Acting': pa
    }
  );

  const [categories] = useState(
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
        'Graphic Design': gd,
        'Fashion Design': fd
      }, 
      'Floor F': {
        'Applied Photography': ap
      }, 
    }
  );

  return (
    <>
      {entered ? <NavTop currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} plan={plan} setPlan={setPlan} category={category} allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered} /> : ''}
      {entered ? <NavLeft currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} plan={plan} setPlan={setPlan} category={category} setCategory={setCategory} /> : ''}
    </>
  );
};

export default NavContainer;
