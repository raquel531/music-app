import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { logout } from '../../redux/actions/authentication';

function Header({ setIsActive}) {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.shoppingCart.items);
    const isLoggedIn = useSelector(state=> state.authentication.isLoggedIn)

    const logoutUser = () => {
        dispatch(logout())   
    }

    return (
        <div className="header">
            <div>
                <Link to="/" className="title">Music Store</Link>
            </div>
            <div className="menu">
                <NavLink to="/" className="catalog">Catalog</NavLink>
                {isLoggedIn ? <FontAwesomeIcon className="cartIcon" onClick={() => { setIsActive(c => !c) }} icon={faCartPlus}></FontAwesomeIcon> : ''}
                {cartItems.length > 0 ? <span>{cartItems.length}</span> : ''}
                {isLoggedIn ? <FontAwesomeIcon className="logOut" onClick={logoutUser} icon={faSignOut}></FontAwesomeIcon> : ''}
                
            </div>

        </div>
    )

}

export default Header