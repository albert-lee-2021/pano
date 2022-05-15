import { useEffect, useState } from 'react';

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

const NavTop = ({ category, viewer, allDots }) => {
  const [plan, setPlan] = useState('');
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

  useEffect(() => {
    //if plan is loftas && category is graphic design
    if(plan.includes('loftas') && category.includes('Graphic Design')) setPlan(floors['Graphic Design']);

    //if plan is loftas && category is interior design
    if(plan.includes('loftas') && category.includes('Interior Design')) setPlan(floors['Interior Design']);

    //if plan is loftas && category is fashion design
    if(plan.includes('loftas') && category.includes('Fashion Design')) setPlan(floors['Fashion Design']);

    //if plan is loftas && category is applied photography
    if(plan.includes('loftas') && category.includes('Applied Photography')) setPlan(floors['Applied Photography']);

    //if plan is loftas && category is performance acting
    if(plan.includes('loftas') && category.includes('Performance Acting')) setPlan(floors['Performance Acting']);
  }, [category])

 

  return (
    <div id="nav-top">
      <PlanButtonContainer category={category} allDots={allDots} viewer={viewer} floors={floors} plan={plan} setPlan={setPlan} />
    </div>
  );
};

export default NavTop;
