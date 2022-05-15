import { useState } from 'react';

import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

const NavContainer = ({allDots, viewer, entered, setEntered}) => {
  const [category, setCategory] = useState('');
  const [plan, setPlan] = useState('');

  return (
    <>
      {entered ? <NavTop plan={plan} setPlan={setPlan} category={category} allDots={allDots} viewer={viewer} entered={entered} setEntered={setEntered} /> : ''}
      {entered ? <NavLeft plan={plan} category={category} setCategory={setCategory} /> : ''}
    </>
  );
};

export default NavContainer;
