// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import './common/css/bootstrap.css'
import './common/css/styles.css'

import {Route, Routes} from 'react-router-dom'

import Mac from './Components/Pages/Mac';
import Iphone from './Components/Pages/Iphone';
import Ipad from './Components/Pages/Ipad';
import Main from './Components/Main';
import Watch from './Components/Pages/Watch';
import Music from './Components/Pages/Music';
import Support from './Components/Pages/Support';
import Tv from './Components/Pages/Tv';
import Four04 from './Components/Pages/Four04';
import SharedLayouts from './Components/Pages/SharedLayouts';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<SharedLayouts/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/mac/' element={<Mac/>}/>
            <Route path='/iPhone/' element={<Iphone/>}/>
            <Route path='/iPad/' element={<Ipad/>}/>
            <Route path='/watch/' element={<Watch/>}/>
            <Route path='/music/' element={<Music/>}/>
            <Route path='/tv/' element={<Tv/>}/>
            <Route path='/support/' element={<Support/>}/>
            <Route path='*' element={<Four04/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
