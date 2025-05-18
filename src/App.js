import React from 'react';
import {RecoilRoot} from 'recoil'
import TodoScreen from './screens/TodoScreen.tsx';

function App() {
  return (
       <RecoilRoot>
      {/* <CharacterCounter/> */}
      <TodoScreen/>
    </RecoilRoot>

  );
}

export default App;


