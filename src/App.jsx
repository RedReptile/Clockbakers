import React from 'react';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<SignupPage/>}></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
              </Routes>
              </BrowserRouter>
            
        </div>
    );
};

export default App;