import React, { useState } from "react";
import "./Registration.scss"
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authentication";


export const Registration = ({setToggle}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)



    const dispatch = useDispatch()

    const register = () => {
        setIsLoggedIn(true)
        const newUser = {Name:name, Email:email, isLoggedin:isLoggedIn};
        const users =JSON.parse(localStorage.getItem('Users:'));
        localStorage.setItem('Users:', JSON.stringify([users, newUser]));
        dispatch(registerUser(name, email, password, isLoggedIn))
        setToggle(false)
    }

    return (
        <div className='registration-form'>
            <h1>Create account</h1>
            <form>
                <label>
                    <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </label>
                <button type='button' onClick={register}>Register</button>
            </form>
        </div>
    )
}