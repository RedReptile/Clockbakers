import React from 'react';
<<<<<<< HEAD
import Home from './pages/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Login from './pages/Login';
=======
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPassword } from './pages/ForgotPasswordPage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';
import SetupPage from './pages/ProfileSetupPage';
>>>>>>> origin/sandip-branch

const App = () => {
    return (
        <div>
              <BrowserRouter>
              <Routes>
<<<<<<< HEAD
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/about' element={<About/>}></Route>
           `    <Route path='/login' element= {<Login/>}></Route>
              </Routes>
              </BrowserRouter>
            
=======
                <Route path='/' element={<SignupPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='forgotpassword' element={<ForgotPassword/>} />
                <Route path="/verification" element={<VerificationCode/>} />
                <Route path="/newpassword" element={<NewPassword/>} />
                <Route path='/setup' element={<SetupPage/>} />
              </Routes>
              </BrowserRouter>
>>>>>>> origin/sandip-branch
        </div>
    );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/sandip-branch
