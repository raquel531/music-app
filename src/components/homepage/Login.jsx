import React from 'react';
import './Login.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authentication';
import { useSelector } from 'react-redux';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector(state => state.authentication.users)


    const userLogin = (e) => {
        e.preventDefault();
        const payload = users.find(user => user.email === email && user.password === password);
        if(payload){
            setIsLoggedIn(true)
            dispatch(login(payload))
        
    } else {
        alert('Invalid credentials')
    }
    
}

 console.log(isLoggedIn)  
    return (
        <div className='login-form'>
            <h1>Log in</h1>
            <form>
                <label>
                    <input type='email' placeholder='Email' value={email} autoComplete="username" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <input type='password' placeholder='Password' autoComplete="current-password"  required value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type='submit' onClick={userLogin}>Login</button>
            </form>
        </div>
    );

};