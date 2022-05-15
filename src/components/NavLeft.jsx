import NavLeftButton from './NavLeftButton';
const NavLeft = ({floors, plan, setPlan, category, setCategory}) => {
    let courses = ['Graphic Design', 'Interior Design', 'Fashion Design', 'Applied Photography', 'Performance Acting',];
    return (
        <div id="nav-left">
            <div style={{ marginLeft: '1rem'}}>
                {courses.map((name, idx) => 
                    <NavLeftButton floors={floors} plan={plan} setPlan={setPlan} category={category} setCategory={setCategory} name={name} key={name + idx}/>
                )}
            </div>
        </div>
    );
};

export default NavLeft;
