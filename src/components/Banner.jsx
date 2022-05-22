import banner from './../assets/banner.png';
import video from './../assets/test.mp4';
const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src={banner} alt=""/>
            <button style={{zIndex: 100}} onClick={() => {
                setEntered(!entered)
            }}>Enter site</button>
            <video width="1879" height="1008" autoPlay={true} muted={true} playsInline >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
  };
  
  export default Banner;
  