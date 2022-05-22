import './App.scss';
import { useState } from 'react';
import NavContainer from './components/NavContainer';
import Banner from './components/Banner';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? '' : <Banner entered={entered} setEntered={setEntered} />}
      {entered ? <NavContainer entered={entered} setEntered={setEntered}/> : ''}
    </>
  );
}

export default App;
