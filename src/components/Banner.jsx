import banner from './../assets/banner.png';

const Banner = ({entered, setEntered}) => {
    return (
        <div id="banner">
            <img src={banner} alt=""/>
            <button onClick={() => {
                sessionStorage.setItem('opened', true);
                setEntered(!entered)
            }}>Enter site</button>
        </div>
    );
  };
  
  export default Banner;
  