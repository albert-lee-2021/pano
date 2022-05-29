const NavLeft = ({ name, category, setCategory }) => {
    let handleClick = (e) => {
        e.preventDefault();
        if(name === category) setCategory('');
        else setCategory(name);
    }

    return (
        <div className={name === category ? 'test btn' : 'btn'} onClick={handleClick}>
            <svg>
                <rect x="0" y="0" fill="none"/>
            </svg>
            {name}
        </div>
    );
};

export default NavLeft;

