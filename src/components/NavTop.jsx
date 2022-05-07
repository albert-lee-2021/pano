import fpentrance from '../assets/fp-entrance.png';
import PlanImage from './PlanImage';
import PlanButton from './PlanButton';
import { useState } from 'react';

const NavTop = ({ setEntered }) => {
  // let floors = ['Entrance', 'Floor2', 'Loftas', 'Floor 4', 'Floor F'];
  let floors = ['E', 'L', 'F4', 'FF'];

  const [clicked, setClicked] = useState(false);
  const [plan, setPlan] = useState('entrance');
  //   {clicked ? <div onClick={() => setClicked(false)} style={{
  //     position: 'absolute',
  //     'background-color': "red", height: "100vh", width: "100vw", opacity: .33
  // }}></div>
  //     : ""}

  let showPlan = (name) => {
    console.log(name);
  };

  return (
    <div id="nav-top">
      <div style={{ margin: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100vw' }}>

        {floors.map(name =>
          <PlanButton clicked={clicked} setClicked={setClicked} name={name} key={name}>
            {name}
          </PlanButton>
        )}
        {
          clicked ? <PlanImage image={fpentrance} key={fpentrance} /> : ''
        }
        
        {/* <button style={{height: '1rem'}} onClick={() => {
            setEntered(false)
          }}>Exit</button> */}
      </div>
    </div>
  );
};

export default NavTop;
