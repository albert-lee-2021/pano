import { useState } from 'react';

const PlanButton = ({ x, y, name, clicked, setClicked }) => {
    return (
        <div>
            <button style={{fontSize: '2rem'}} onClick={() => {
                console.log('plan button clicked');
                console.log(name);
                setClicked(!clicked);
                console.log(clicked);
            }
            }>
                {name}
            </button>
        </div>

    );
};

export default PlanButton;
