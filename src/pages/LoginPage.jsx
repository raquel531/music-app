import React from 'react';
import Login from '../components/homepage/Login.jsx'
import './LoginPage.scss'
import { Registration } from '../components/homepage/Registration.jsx';
import { useState } from 'react';

const LoginPage = () => {

    const [toggle, setToggle] = useState(false)
   
    return(
        <div className='login-page'>

            {toggle ?  <Registration setToggle={setToggle}/> :  <Login/>}
            <button onClick={() => {setToggle(e=> !e)}}>{toggle ? 'Already registered? Log in' : "Don't have an account? Sign up" }</button>
        </div>
    );
};

export default LoginPage;