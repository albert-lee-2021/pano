const NavTop = ({entered, setEntered}) => {
  // let floors = ['Entrance', 'Floor2', 'Loftas', 'Floor 4', 'Floor F'];
  let floors = ['E', 'F2', 'L', 'F4', 'FF'];
  return (
    <div id="nav-top">
      <img style={{height: '5rem', opcaity: 1}} src="banner.PNG" alt=""/>
      
      <div style={{margin: '1rem'}}>
        {floors.map(name => <button>{name}</button>)}
        <button onClick={() => {
          setEntered(false)
          console.log('hi');
          }}>Exit</button>
      </div>
    </div>
  );
};

export default NavTop;
