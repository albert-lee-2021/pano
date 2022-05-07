import entrance from '../assets/floor-plans/entrance.png';
import loftas from '../assets/floor-plans/loftas.png';
import four from '../assets/floor-plans/four.png';
import f from '../assets/floor-plans/f.png';

import PlanImage from './PlanImage';
import PlanButton from './PlanButton';
import { useState } from 'react';

const NavTop = ({ setEntered }) => {
  // let floors = ['Entrance', 'Floor2', 'Loftas', 'Floor 4', 'Floor F'];
  // let floors = ['E', 'L', 'F4', 'FF'];
  let floors = {
    'E': entrance,
    'L': loftas,
    'F4': four, 
    'FF': f
  }

  const [clicked, setClicked] = useState(false);
  const [plan, setPlan] = useState(null);

  let showPlan = (name) => {
    console.log(name);
  };

  return (
    <div id="nav-top">
      <div style={{ margin: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100vw' }}>
        {Object.keys(floors).map((name, i) =>
          <PlanButton floors={floors} setPlan={setPlan} clicked={clicked} setClicked={setClicked} name={name} key={name + i}>
            {name}
          </PlanButton>
        )}

        {clicked ? 
          <PlanImage image={plan}/> : ''
        }

      </div>
    </div>
  );
};

export default NavTop;
