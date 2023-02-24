import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import List from './Components/List'
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
          <Routes>
          <Route path='/home' element={<Home/>}></Route>
            <Route path='/all' element={<List/>}></Route>
            <Route path='/detail/:name' element={<Detail/>}></Route>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
