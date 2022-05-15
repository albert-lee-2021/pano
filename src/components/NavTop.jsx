import { useState } from 'react';

import entrance from '../assets/floor-plans/entrance.png';
import four from '../assets/floor-plans/four.png';
import f from '../assets/floor-plans/f.png';

import loftas from '../assets/floor-plans/loftas/loftas.png';
import gd from '../assets/floor-plans/loftas/floorlgkd.png';
import id from '../assets/floor-plans/loftas/floorlinterior.png';
import fd from '../assets/floor-plans/loftas/floorlfashion.png';
import ap from '../assets/floor-plans/loftas/floorlphotography.png';
import pa from '../assets/floor-plans/loftas/floorlperformance.png';


import PlanButtonContainer from './PlanButtonContainer';

const NavTop = ({ category, setEntered, viewer, allDots }) => {
  // const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState(null);
  

  // let floors = ['Entrance', 'Floor2', 'Loftas', 'Floor 4', 'Floor F'];
  // let floors = ['E', 'L', 'F4', 'FF'];
  let floors = {
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

  return (
    <div id="nav-top">
      <PlanButtonContainer category={category} setEntered={setEntered} allDots={allDots} viewer={viewer} floors={floors} plan={plan} setPlan={setPlan} />
    </div>
  );
};

export default NavTop;
