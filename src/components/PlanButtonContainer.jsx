import { useState } from "react";
import PlanButton from "./PlanButton";
import PlanImage from './PlanImage';

const PlanButtonContainer = ({ setEntered, viewer, allDots, floors, plan, setPlan, open, setOpen }) => {
    const [anyClicked, setAnyClicked] = useState('false');
    return (
        <div style={{ margin: '1rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100vw' }}>
            {Object.keys(floors).map((name, i) =>
                <PlanButton anyClicked={anyClicked} setAnyClicked={setAnyClicked} floors={floors} plan={plan} setPlan={setPlan} open={open} setOpen={setOpen} name={name} key={name + i}>
                    {name}
                </PlanButton>
            )}
            {open ?
                <PlanImage viewer={viewer} allDots={allDots} plan={plan} /> : ''
            }
            {/* <button>Search</button> */}
        </div>
    );
};

export default PlanButtonContainer;
