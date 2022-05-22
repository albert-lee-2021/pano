const Dot = ({ left, top, setDots, viewer, allDots, dotMatch, i }) => {
    let unfocused = {
        left: left,
        top: top,
        display: 'block',
        height: '1rem',
        lineHeight: '1rem',
        position: 'relative',
        width: '1rem',
        zIndex: 10,
        border: '2px solid #444',
        borderRadius: '50%',
    }

    let focused = {
        border: '2px solid magenta',
    }

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
        <div style={(allDots[dotMatch][i].destination.src === viewer.panorama.src) ? {...unfocused, ...focused} : unfocused} onClick={handleClick}></div>
    );
};

export default Dot;
