import banner from './../assets/banner.png';
import video from './../assets/test.mp4';
const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src={banner} alt=""/>
            <button onClick={() => {
                sessionStorage.setItem('opened', true);
                setEntered(!entered)
            }}>Enter site</button>
            <video width="1879" height="1008" autoplay="true" muted="true" playsinline >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
  };
  
  export default Banner;
  