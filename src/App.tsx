
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HREPage from './components/pages/HREPage';
import HREForm from './components/atoms/HREForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HREPage/>}/>
        <Route path='/contact' element={<HREForm/>}/>
      </Routes>
    </BrowserRouter>
);
}

export default App;
