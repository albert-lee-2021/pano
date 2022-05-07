import { useState } from 'react';

const PlanButton = ({ x, y, name, clicked, setPlan, setClicked, floors }) => {
    return (
        <div>
            <button style={{fontSize: '2rem'}} onClick={() => {
                console.log('plan button clicked');
                console.log(name);
                setClicked(!clicked);
                setPlan(floors[name])
                console.log(clicked);
            }
            }>
                {name}
            </button>
        </div>

    );
};

export default PlanButton;
