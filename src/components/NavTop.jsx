import { useEffect } from 'react';
import PlanButtonContainer from './PlanButtonContainer';

const NavTop = ({ planImages, currentFloor, setCurrentFloor, planImage, setPlanImage, category, viewer, allDots, floors }) => {
  
  useEffect(() => {
    if(!planImages[currentFloor]) return;
    let newPlanImage = planImages[currentFloor][category];
    if(!newPlanImage) {
      setPlanImage(floors[currentFloor]);
      return;
    };
    if(!planImage || planImage.includes('entrance')) return;
    setPlanImage(newPlanImage);
  }, [category, currentFloor, floors, planImage, planImages, setPlanImage])

  return (
    <div id="nav-top">
      <PlanButtonContainer planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} category={category} allDots={allDots} viewer={viewer} floors={floors} planImage={planImage} setPlanImage={setPlanImage} />
    </div>
  );
};

export default NavTop;
