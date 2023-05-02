import React, { useState } from 'react';
import './App.scss';
import Header from './components/common/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Catalog from './pages/Catalog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


function App() {
  const [isActive, setIsActive] = useState(false);
  const isLogged = useSelector(state => state.authentication.isLoggedIn)

  return (
    <div className="App">
      <BrowserRouter>
        <div className='header'>
          <Header setIsActive={setIsActive} />
        </div>
        <Routes>
          <Route path='/' element={isLogged ? <Catalog isActive={isActive} /> : <LoginPage />} />

        </Routes>
        <div className='notification'>
          <ToastContainer position="bottom-center" autoClose={1500} closeOnClick pauseOnFocusLoss draggable
            pauseOnHover
            theme="dark" />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
