const NavLeft = ({setCategory}) => {
    let courses = ['Graphic Design', 'Interior Design', 'Fashion Design', 'Applied Photography', 'Performance Acting',];
    // let courses = ['G', 'I', 'P', 'F', 'A'];
    let handleClick = (e) => {
        e.preventDefault();
        setCategory(e.target.innerHTML);
    }
    return (
        <div id="nav-left">
            <div style={{ margin: '1rem', fontSize: '1rem' }}>
                {courses.map(name => <button onClick={handleClick} key={name}>{name}</button>)}
            </div>
        </div>
    );
};

export default NavLeft;
