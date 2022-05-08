import DotContainer from "./DotContainer"
import { useEffect, useState } from 'react';

const PlanImage = ({image, allDots, viewer}) => {
    //default style
    let style = {position: 'fixed', top: '4rem', width: 'auto', height: '10rem', zIndex: 1}
    const [dotMatch, setDotMatch] = useState('entrance');

    // make loftas floor plan wider by overriding default
    if(image.includes('loftas')) 
        style = Object.assign({}, style, {width: '30rem'})
    // make f and four floor plan heightened by overriding default
    else if(image.includes('media/f')) {
        style = Object.assign({}, style, {width: '20rem', height: 'auto'})
    }

    useEffect(() => {
        console.log(image);
        if(image.includes('entrance')) {
            setDotMatch('entrance');
        }

        else if(image.includes('loftas')) {
            setDotMatch('loftas');
        }
        
        else if(image.includes('media/four')) {
            setDotMatch('four');
        }

        else if(image.includes('media/f')) {
            setDotMatch('f');
        }
    }, [image])
    
    return (
        <>
            <img style={style} src={image} alt=""/>
            <DotContainer viewer={viewer} allDots={allDots} dotMatch={dotMatch}/>
        </>
    );
  };
  
  export default PlanImage;
  