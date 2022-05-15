import { useState } from "react";
import PlanButton from "./PlanButton";
import PlanImage from './PlanImage';

const PlanButtonContainer = ({ category, viewer, allDots, floors, plan, setPlan}) => {
    const [anyClicked, setAnyClicked] = useState('false');
    return (
        <div style={{ margin: '1rem 8rem', display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100vw' }}>
            {Object.keys(floors).slice(0, 4).map((name, i) =>
                <PlanButton category={category} anyClicked={anyClicked} setAnyClicked={setAnyClicked} floors={floors} plan={plan} setPlan={setPlan} name={name} key={name + i}>
                    {name}
                </PlanButton>
            )}
            {anyClicked ?
                <PlanImage category={category} viewer={viewer} allDots={allDots} plan={plan} setPlan={setPlan}/> : ''
            }
            {/* <button>Search</button> */}
        </div>
    );
};

export default PlanButtonContainer;
