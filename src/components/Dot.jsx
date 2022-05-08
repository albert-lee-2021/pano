const Dot = ({ viewer, clicked, allDots, dotMatch, i }) => {
    let handleClick = (e) => {
        e.preventDefault();
        viewer.current.setPanorama(allDots[dotMatch][i].destination);
    }

    return (
        <div className={clicked ? 'button-focused' : 'button'} onClick={e => handleClick(e)}></div>
    );
};

export default Dot;
