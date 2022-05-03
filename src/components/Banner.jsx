import banner from './../assets/banner.png';

const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src={banner} alt=""/>
            <button onClick={() => setEntered(!entered)}>Enter site</button>
        </div>
    );
  };
  
  export default Banner;
  