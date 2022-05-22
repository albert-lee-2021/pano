import NavLeftButton from './NavLeftButton';
const NavLeft = ({currentFloor, setCurrentFloor, floors, planImage, setPlanImage, category, setCategory}) => {
    let courses = ['Graphic Design', 'Interior Design', 'Fashion Design', 'Applied Photography', 'Performance Acting',];
    return (
        <div id="nav-left">
            <div style={{ marginLeft: '1rem'}}>
                {courses.map((name, idx) => 
                    <NavLeftButton currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} floors={floors} planImage={planImage} setPlanImage={setPlanImage} category={category} setCategory={setCategory} name={name} key={name + idx}/>
                )}
            </div>
        </div>
    );
};

export default NavLeft;
