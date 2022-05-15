import { useEffect, useState } from "react";

const PlanButton = ({ x, y, category, anyClicked, setAnyClicked, name, plan, setPlan, floors }) => {
    // const [cn, setCn] = useState('btn');
    const [localClicked, setLocalClicked] = useState(false);

    let handleClick = e => {
        setAnyClicked(false);
        if (!anyClicked) {
            setLocalClicked(true);
            setPlan(floors[name]);
            setAnyClicked(true);
        }
        else if (plan === floors[name]) {
            setLocalClicked(false);
            setAnyClicked(false);
        }
        else if (plan !== floors[name]) {
            setLocalClicked(true);
            setPlan(floors[name]);
        }
        else if (plan !== floors[name]) {
            setLocalClicked(true);
            setPlan(floors[name]);
        }
    }

    useEffect(() => {
        // console.log(anyClicked);
        // console.log(localClicked);
        console.log('plan button use effect')
        return () => {
            if(localClicked || !anyClicked) setLocalClicked(false);
        }
    }, [localClicked, anyClicked])

    return (
        <div>
            {/* <button style={{fontSize: '2rem'}} onClick={handleClick}>
                {name}
            </button> */}
            {/* <div className={open ? "test btn" : "btn"} class="btn" onClick={handleClick}> */}
            <div className={localClicked ? 'test btn' : 'btn'} onClick={handleClick}>
                <svg>
                    <rect x="0" y="0" fill="none" width="166" height="45" />
                </svg>
                {name}
            </div>
        </div>
    );
};

export default PlanButton;
