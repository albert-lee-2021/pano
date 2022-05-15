import DotContainer from "./DotContainer"
import { useEffect, useState } from 'react';

const PlanImage = ({ category, plan, allDots, viewer }) => {
    //default style
    let style = { position: 'fixed', top: '5rem', width: 'auto', height: '10rem', zIndex: 1 }
    const [dotMatch, setDotMatch] = useState('entrance');

    // make loftas floor plan wider by overriding default
    if (plan && plan.includes('loftas'))
        style = Object.assign({}, style, { height: '12rem', width: '41rem' })
    // make f and four floor plan heightened by overriding default
    else if (plan && plan.includes('media/f')) {
        style = Object.assign({}, style, { width: '14rem', height: 'auto' })
    }

    useEffect(() => {
        if(!plan) return;
        if (plan.includes('entrance')) {
            setDotMatch('entrance')
        } else if (plan.includes('loftas')) {
            setDotMatch('loftas');
        } else if (plan.includes('media/four')) {
            setDotMatch('four');
        } else if (plan.includes('media/f')) {
            setDotMatch('f');
        }
    }, [category, plan])

    return (
        <>
            <img style={style} src={plan} alt="" />
            <DotContainer viewer={viewer} allDots={allDots} dotMatch={dotMatch} />
        </>
    );
};

export default PlanImage;
