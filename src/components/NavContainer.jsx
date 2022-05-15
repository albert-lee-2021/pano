import { useState } from 'react';

import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

const NavContainer = ({allDots, viewer, entered, setEntered}) => {
  const [category, setCategory] = useState('');

  return (
    <>
      {entered ? <NavTop category={category} allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered} /> : ''}
      {entered ? <NavLeft category={category} setCategory={setCategory} /> : ''}
    </>
  );
};

export default NavContainer;
