import React from 'react';
import Home from './pages/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Shop from './pages/shop';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/about' element={<About/>}></Route>
           `    <Route path='/login' element= {<Login/>}></Route>
              </Routes>
              </BrowserRouter>
            
        </div>
    );
};

export default App;
