import Dot from './Dot';

const DotContainer = ({viewer, allDots, dotMatch}) => {
    // const [clicked, setClicked] = useState(false);
    // viewer.remove( panorama );
    // let newpanorama = new PANOLENS.ImagePanorama( 'asset/equirectangular2.jpg' );
    // viewer.add( newpanorama );
    // viewer.setPanorama( newpanorama );
    return (
        <div className="dot-container">
            {allDots[dotMatch].map((dot, i) => <Dot viewer={viewer} i={i} allDots={allDots} dotMatch={dotMatch} key={i}/>)}
        </div>
    );
};

export default DotContainer;
