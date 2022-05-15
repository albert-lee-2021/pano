import { useState } from "react";
import PlanButton from "./PlanButton";
import PlanImage from './PlanImage';

const PlanButtonContainer = ({ category, viewer, allDots, floors, plan, setPlan}) => {
    const [active, setActive] = useState('');

    return (
        <div style={{ margin: '1rem 13rem', display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100vw' }}>
            {Object.keys(floors).slice(0, 4).map((name, i) =>
                <PlanButton category={category} active={active} setActive={setActive} floors={floors} plan={plan} setPlan={setPlan} name={name} key={name + i}>
                    {name}
                </PlanButton>
            )}
            {plan ?
                <PlanImage category={category} viewer={viewer} allDots={allDots} plan={plan} setPlan={setPlan}/> : ''
            }
            {/* <button>Search</button> */}
        </div>
    );
};

export default PlanButtonContainer;
