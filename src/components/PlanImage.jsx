const Plan = ({image}) => {
    //default style
    let style = {position: 'fixed', top: '4rem', width: 'auto', height: '10rem'}

    // make loftas floor plan wider by overriding default
    if(image.includes('loftas')) 
        style = Object.assign({}, style, {width: '40rem'})

    // make four + f floor plan heightened by overriding default
    if(image.includes('media/f')) 
        style = Object.assign({}, style, {width: '20rem', height: 'auto'})
        
    return (
        <img style={style} src={image} alt=""/>
    );
  };
  
  export default Plan;
  