import { useEffect } from 'react';
import PlanButtonContainer from './PlanButtonContainer';

const NavTop = ({ plan, setPlan, category, viewer, allDots, floors }) => {
  
  useEffect(() => {
    //if plan is loftas && category is toggled off remove highlights
    if(!category && plan.includes('floorl')) {
      setPlan(floors['Loftas'])
    }

    //if category is graphic design
    else if(category.includes('Graphic Design')) setPlan(floors['Graphic Design'])
    
    //if category is interior design
    else if(category.includes('Interior Design')) setPlan(floors['Interior Design']);

    //if category is fashion design
    else if(category.includes('Fashion Design')) setPlan(floors['Fashion Design']);

    //if category is applied photography
    else if(category.includes('Applied Photography')) setPlan(floors['Applied Photography']);

    //if category is performance acting
    else if(category.includes('Performance Acting')) setPlan(floors['Performance Acting']);
  }, [category])

 

  return (
    <div id="nav-top">
      <PlanButtonContainer category={category} allDots={allDots} viewer={viewer} floors={floors} plan={plan} setPlan={setPlan} />
    </div>
  );
};

export default NavTop;
