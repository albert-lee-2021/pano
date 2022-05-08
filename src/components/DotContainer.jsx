import { useState } from 'react';
import Dot from './Dot';

const DotContainer = ({viewer, allDots, dotMatch}) => {
    const [dots, setDots] = useState(allDots[dotMatch]);
    return (
        <div className="dot-container">
            {allDots[dotMatch].map((_, i) => <Dot dots={dots} setDots={setDots} viewer={viewer} i={i} allDots={allDots} dotMatch={dotMatch} key={i}/>)}
        </div>
    );
};

export default DotContainer;
