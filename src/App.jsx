import React from 'react';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPassword } from './pages/ForgotPasswordPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';
import SetupPage from './pages/ProfileSetupPage';

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<SignupPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='forgotpassword' element={<ForgotPassword/>} />
                <Route path="/verification" element={<VerificationCode/>} />
                <Route path="/newpassword" element={<NewPassword/>} />
                <Route path='/setup' element={<SetupPage/>} />
              </Routes>
              </BrowserRouter>
        </div>
    );
};

export default App;