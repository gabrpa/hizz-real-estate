import HREHeader from './components/HREHeader';
import HREAwards from './components/HREAwards';
import HREProperties from './components/HREProperties';
import HREValuation from './components/HREValuation';
import { RecoilRoot } from 'recoil';
import HREReasons from './components/HREReasons';

function App() {
  return (
    <RecoilRoot>
      <HREHeader/>
      <HREAwards/>
      <HREProperties/>
      <HREValuation/>
      <HREReasons/>
    </RecoilRoot>
  );
}

export default App;
