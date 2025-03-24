import React from 'react';
import Home from './pages/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/about' element={<About/>}></Route>
           `    <Route path='/login' element= {<Login/>}></Route>
           `    <Route path='/productdetails' element= {<ProductDetail/>}></Route>
              </Routes>
              </BrowserRouter>
            
        </div>
    );
};

export default App;
