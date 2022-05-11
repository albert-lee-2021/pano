import DotContainer from "./DotContainer"
import { useEffect, useState } from 'react';

const PlanImage = ({plan, allDots, viewer}) => {
    //default style
    let style = {position: 'fixed', top: '4rem', width: 'auto', height: '10rem', zIndex: 1}
    const [dotMatch, setDotMatch] = useState('entrance');

    // make loftas floor plan wider by overriding default
    if(plan.includes('loftas')) 
        style = Object.assign({}, style, {width: '30rem'})
    // make f and four floor plan heightened by overriding default
    else if(plan.includes('media/f')) {
        style = Object.assign({}, style, {width: '20rem', height: 'auto'})
    }

    useEffect(() => {
        console.log(plan);
        if(plan.includes('entrance')) setDotMatch('entrance');
        else if(plan.includes('loftas')) setDotMatch('loftas');
        else if(plan.includes('media/four')) setDotMatch('four');
        else if(plan.includes('media/f')) setDotMatch('f');
    }, [plan])
    
    return (
        <>
            <img style={style} src={plan} alt=""/>
            <DotContainer viewer={viewer} allDots={allDots} dotMatch={dotMatch}/>
        </>
    );
  };
  
  export default PlanImage;
  