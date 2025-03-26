import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
<<<<<<< HEAD
import Shop from './pages/Shop';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPassword } from './pages/ForgotPasswordPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';
import SetupPage from './pages/ProfileSetupPage';
=======
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
>>>>>>> origin/hitendra-branch

const App = () => {
    return (
        <div>
<<<<<<< HEAD
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='forgotpassword' element={<ForgotPassword />} />
                    <Route path="/verification" element={<VerificationCode />} />
                    <Route path="/newpassword" element={<NewPassword />} />
                    <Route path='/setup' element={<SetupPage />} />
                </Routes>
            </BrowserRouter>
=======
              <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/about' element={<About/>}></Route>
           `    <Route path='/login' element= {<Login/>}></Route>
           `    <Route path='/productdetails' element= {<ProductDetail/>}></Route>
           `    <Route path='/profile' element= {<Profile/>}></Route>
              </Routes>
              </BrowserRouter>
            
>>>>>>> origin/hitendra-branch
        </div>
    );
};

export default App;
