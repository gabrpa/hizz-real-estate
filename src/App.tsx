import React from 'react';
import './App.css';
import HREHeader from './components/HREHeader';
import HREAwards from './components/HREAwards';
import HREProperties from './components/HREProperties';
import { RecoilRoot } from 'recoil';
import HREValuation from './components/HREValuation';

function App() {
  return (
    <RecoilRoot>
      <HREHeader/>
      <HREAwards/>
      <HREProperties/>
      <HREValuation/>
    </RecoilRoot>
  );
}

export default App;
