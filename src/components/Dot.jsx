const Dot = ({ setDots, viewer, allDots, dotMatch, i }) => {
    let handleClick = (e) => {
        e.preventDefault(); 
        let newDot = {
            [i]: {
                ...allDots[dotMatch][i], clicked: !allDots[dotMatch][i].clicked
            }
        }
        setDots({...allDots[dotMatch], ...newDot})
        viewer.current.setPanorama(allDots[dotMatch][i].destination);
    }

    return (
        <div className={(allDots[dotMatch][i].destination.src === viewer.current.panorama.src) ? 'button-focused' : 'button'} onClick={e => handleClick(e)}></div>
    );
};

export default Dot;
