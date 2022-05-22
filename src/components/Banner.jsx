import banner from './../assets/banner.png';
import video from './../assets/test.mp4';
const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src={banner} alt=""/>
            <button style={{zIndex: 100}} onClick={() => {
                setEntered(!entered)
            }}>Enter site</button>
            <video width="750" height="500" autoPlay={true} muted={true} playsInline >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
  };
  
  export default Banner;
  