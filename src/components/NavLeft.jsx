const NavLeft = () => {
    // let courses = ['Graphic Design', 'Interior Design', 'Performance Acting', 'Fashion Design', 'Applied Photography'];
    let courses = ['G', 'I', 'P', 'F', 'A'];
    return (
        <div id="nav-left">
            <div style={{ margin: '1rem' }}>
                {courses.map(name => <button key={name}>{name}</button>)}
            </div>
        </div>
    );
};

export default NavLeft;
