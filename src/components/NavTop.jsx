import { useState } from 'react';

import entrance from '../assets/floor-plans/entrance.png';
import loftas from '../assets/floor-plans/loftas.png';
import four from '../assets/floor-plans/four.png';
import f from '../assets/floor-plans/f.png';

import PlanButtonContainer from './PlanButtonContainer';

const NavTop = ({ setEntered, viewer, allDots }) => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState(null);
  

  // let floors = ['Entrance', 'Floor2', 'Loftas', 'Floor 4', 'Floor F'];
  // let floors = ['E', 'L', 'F4', 'FF'];
  let floors = {
    'E': entrance,
    'L': loftas,
    'F4': four,
    'FF': f
  }

  return (
    <div id="nav-top">
      <PlanButtonContainer setEntered={setEntered} allDots={allDots} viewer={viewer} floors={floors} plan={plan} setPlan={setPlan} open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavTop;
