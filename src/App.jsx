import React from 'react';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPassword } from './pages/ForgotPasswordPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<SignupPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='forgotpassword' element={<ForgotPassword/>} />
              </Routes>
              </BrowserRouter>
            
        </div>
    );
};

export default App;