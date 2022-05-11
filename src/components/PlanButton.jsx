import { useState } from "react";

const PlanButton = ({ x, y, anyClicked, setAnyClicked, name, plan, setPlan, floors, open, setOpen }) => {
    const [cn, setCn] = useState('btn');
    // const [open, setOpen] = useState(false);

    let handleClick = e => {
        if(anyClicked) {
            setAnyClicked(false);
        }
        if (!open) {
            setCn('test btn')
            setPlan(floors[name]);
            setOpen(true);
            setAnyClicked(true);
        }
        else if (plan === floors[name]) {
            setCn('btn');
            setOpen(false);
        }
        else if (plan !== floors[name] && open) {
            console.log(plan)
            console.log(floors[name])
            console.log('test')
            setCn('test btn');
            setPlan(floors[name]);
            setOpen(true);
        }
        else if (plan !== floors[name]) {
            setCn('test btn');
            setPlan(floors[name]);
            setOpen(true);
        }
    }

    return (
        <div>
            {/* <button style={{fontSize: '2rem'}} onClick={handleClick}>
                {name}
            </button> */}
            {/* <div className={open ? "test btn" : "btn"} class="btn" onClick={handleClick}> */}
            <div className={cn} onClick={handleClick}>
                <svg>
                    <rect x="0" y="0" fill="none" width="166" height="45" />
                </svg>
                {name}
            </div>
        </div>
    );
};

export default PlanButton;
