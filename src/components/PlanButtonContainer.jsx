import PlanButton from "./PlanButton";
import PlanImage from './PlanImage';

const PlanButtonContainer = ({ planImages, currentFloor, setCurrentFloor, category, viewer, allDots, floors, planImage, setPlanImage}) => {
    return (
        <div style={{ margin: '1rem 13rem', display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100vw' }}>
            {Object.keys(floors).slice(0, 4).map((name, i) =>
                <PlanButton planImages={planImages} currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} category={category} floors={floors} planImage={planImage} setPlanImage={setPlanImage} name={name} key={name + i}>
                    {name}
                </PlanButton>
            )}
            {planImage ?
                <PlanImage category={category} viewer={viewer} allDots={allDots} planImage={planImage} setPlanImage={setPlanImage}/> : ''
            }
            <div className="reset-btn" onClick={() => {window.location = window.location.href}}></div>
        </div>
    );
};

export default PlanButtonContainer;
