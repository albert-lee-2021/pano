const NavLeft = ({name, setCategory}) => {
    let handleClick = (e) => {
        e.preventDefault();
        setCategory(name);
    }
    return (
        <div className='btn' onClick={handleClick}>
            <svg>
                <rect x="0" y="0" fill="none" width="166" height="45" />
            </svg>
            {name}
        </div>
    );
};

export default NavLeft;

