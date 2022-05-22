import video from './../assets/testhighres.mp4';
const Banner = ({entered, setEntered}) => {
    return (
        <div style={{position: 'absolute'}} id="banner">
            <div className="enter-button" onClick={() => {
                setEntered(!entered)
            }}></div>
            <video width="1879" height="1008" autoPlay={true} muted={true} playsInline >
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    );
  };
  
  export default Banner;
  