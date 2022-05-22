import DotContainer from "./DotContainer"
import { useEffect, useState } from 'react';

const PlanImage = ({ category, planImage, allDots, viewer }) => {
    //default style
    let style = { position: 'fixed', top: '5rem', width: 'auto', height: '10rem', zIndex: 1 }
    const [dotMatch, setDotMatch] = useState('entrance');

    // make loftas floor planImage wider by overriding default
    if ((planImage && planImage.includes('loftas')) || (planImage && planImage.includes('floorl')))
        style = Object.assign({}, style, { height: '12rem', width: '41rem' })
    // make f and four floor planImage heightened by overriding default
    else if (planImage && planImage.includes('media/f')) {
        style = Object.assign({}, style, { width: '14rem', height: 'auto' })
    }

    useEffect(() => {
        if(!planImage) return;
        if (planImage.includes('entrance.')) {
            setDotMatch('entrance')
        } else if (planImage.includes('loftas.')) {
            setDotMatch('loftas');
        } else if (planImage.includes('four.')) {
            setDotMatch('four');
        } else if (planImage.includes('f.')) {
            setDotMatch('f');
        }
    }, [category, planImage])

    return (
        <>
            <img style={style} src={planImage} alt="" />
            <DotContainer viewer={viewer} allDots={allDots} dotMatch={dotMatch} />
        </>
    );
};

export default PlanImage;
