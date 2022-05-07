import { useEffect } from "react";

const PlanButton = ({ x, y, name, open, setOpen, plan, setPlan, floors }) => {
    
    return (
        <div>
            <button style={{fontSize: '2rem'}} onClick={e => {
                console.log(plan);
                if(!open) {
                    setPlan(floors[name]);
                    setOpen(true);
                }

                else if(plan === floors[name]) {
                    setOpen(false);
                }

                else if(plan !== floors[name]) {
                    setPlan(floors[name]);
                    setOpen(true);
                }
            }
            }>
                {name}
            </button>
        </div>

    );
};

export default PlanButton;
