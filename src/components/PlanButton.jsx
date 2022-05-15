const PlanButton = ({ x, y, category, active, setActive, name, plan, setPlan, floors }) => {

    let handleClick = e => {
        e.preventDefault();
        console.log(active === name);
        setPlan(floors[name]);
        if(active === name) {
            setPlan('');
            setActive('')
         } else setActive(name);
    }

    return (
        <div>
            <div className={name === active ? 'test btn' : 'btn'} onClick={handleClick}>
                <svg>
                    <rect x="0" y="0" fill="none" width="166" height="45" />
                </svg>
                {name}
            </div>
        </div>
    );
};

export default PlanButton;
