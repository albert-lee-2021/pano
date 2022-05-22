import { useEffect } from "react";

const PlanButton = ({ planImages, category, currentFloor, setCurrentFloor, name, setPlanImage, floors }) => {

    let handleClick = e => {
        e.preventDefault();
        setPlanImage(floors[name]);
        if(currentFloor === name) {
            setPlanImage('');
            setCurrentFloor('')
        } else {
            setCurrentFloor(name)
        }
    }

    useEffect(() => {
        if(!currentFloor || !category) return;
        let newPlanImage = planImages[currentFloor][category];
        if(newPlanImage) setPlanImage(newPlanImage);
    }, [currentFloor, category, planImages, setPlanImage])

    return (
        <div>
            <div className={name === currentFloor ? 'test btn' : 'btn'} onClick={handleClick}>
                <svg>
                    <rect x="0" y="0" fill="none" width="166" height="45" />
                </svg>
                {name}
            </div>
        </div>
    );
};

export default PlanButton;
