import { useEffect } from "react";

const NavLeft = ({ floors, plan, setPlan, name, category, setCategory }) => {
    let handleClick = (e) => {
        e.preventDefault();
        if(name === category) setCategory('');
        else setCategory(name);
    }

    useEffect(() => {
        //plan type??
        console.log('plan: ' + plan)
        // console.log('category: ' + category)
        // console.log('name: ' + name)

        //if entrance plan is clicked reset category
        if(plan.includes('entrance')) setCategory('');

        else if(plan.includes('loftas')){
     

        } else if(plan.includes('four.')) {
            //set plan for category
        } else if(plan.includes('f.')) {
            //set plan for category
        }
        // setCategory('');
        
        //else if plan type does not change
        // setCategory(category);
    }, [plan])

    return (
        <div className={name === category ? 'test btn' : 'btn'} onClick={handleClick}>
            <svg>
                <rect x="0" y="0" fill="none" width="166" height="45" />
            </svg>
            {name}
        </div>
    );
};

export default NavLeft;

