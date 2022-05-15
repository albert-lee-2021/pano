import { useEffect } from "react";

const NavLeft = ({ plan, setPlan, name, category, setCategory }) => {
    let handleClick = (e) => {
        e.preventDefault();
        if(name === category) setCategory('');
        else setCategory(name);
    }

    useEffect(() => {
        setCategory(prevState => {
            return category
        });
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

