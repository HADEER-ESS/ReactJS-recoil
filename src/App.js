import React from 'react';
import CharacterCounter from './components/CharacterCounter';
import {RecoilRoot} from 'recoil'

function App() {
  return (
       <RecoilRoot>
      <CharacterCounter/>
    </RecoilRoot>

  );
}

export default App;


