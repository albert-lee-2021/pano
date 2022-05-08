const Dot = ({ dots, setDots, viewer, allDots, dotMatch, i }) => {
    let handleClick = (e) => {
        let newDot = {
            i: {
                ...dots[i], clicked: !dots[i].clicked
            }
        }
        setDots({...dots, ...newDot})
        e.preventDefault();
        viewer.current.setPanorama(allDots[dotMatch][i].destination);
    }

    return (
        <div className={(allDots[dotMatch][i].destination.src === viewer.current.panorama.src) ? 'button-focused' : 'button'} onClick={e => handleClick(e)}></div>
    );
};

export default Dot;
