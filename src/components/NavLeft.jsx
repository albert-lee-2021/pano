const NavLeft = ({setCategory}) => {
    let courses = ['Graphic Design', 'Interior Design', 'Fashion Design', 'Applied Photography', 'Performance Acting',];
    // let courses = ['G', 'I', 'P', 'F', 'A'];
    let handleClick = (e) => {
        e.preventDefault();
        setCategory(e.target.innerHTML);
    }

    return (
        <div id="nav-left">
            <div style={{ marginLeft: '1rem'}}>
                {courses.map(name => 
                <div className='btn' onClick={handleClick} key={name}>
                    <svg>
                        <rect x="0" y="0" fill="none" width="166" height="45" />
                    </svg>
                    {name}
                </div>)}
            </div>
        </div>
    );
};

export default NavLeft;
