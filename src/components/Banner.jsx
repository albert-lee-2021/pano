const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src="banner.PNG" alt=""/>
            <button onClick={() => setEntered(!entered)}>Enter site</button>
        </div>
    );
  };
  
  export default Banner;
  