import React, { useEffect, useRef } from 'react';
import './ShoppingCart.scss'
import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/shoppingCart.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cartItems, isActive, clearCart }, props) => {



    let total = 0;
    let currency = '';
    const notify = () => toast("Your order was placed");

    const boxRef = useRef();

    cartItems.forEach((item) => {
        total += item.trackPrice;
        currency = item.currency;
    });

    const handleClearCart = () => {
        clearCart();
    };

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target !== boxRef.current) {
                console.log(`You clicked Outside the box!`);
            } else {
                console.log(`You clicked Inside the box!`);
            }
        }
    }, []);


    return (
        <div ref={boxRef} className={`cart ${isActive ? 'open' : ''}`}>
            <div className='content'>
                <table>
                    {cartItems.length !== 0 && (
                        <thead>
                            <tr>
                                <th></th>
                                <th className='cartHeader'>Track</th>
                                <th className='cartHeader'>Artist</th>
                                <th className='cartHeader'>Price</th>
                            </tr>
                        </thead>
                    )}

                    <tbody>
                        {cartItems.length === 0 ?
                            <tr>
                                <td className="no-results">Your cart is empty</td>
                            </tr>
                            :
                            cartItems.map((item, index) => (

                                <tr key={index} className='item'>
                                    <td><img src={item.artworkUrl60} alt="Album Artwork" /></td>
                                    <td className='item'>{item.trackName}</td>
                                    <td className='item'>{item.artistName}</td>
                                    <td className='item'>{item.trackPrice} <span className='currency'>{item.currency}</span></td>
                                </tr>

                            ))}
                    </tbody>
                </table>
                {cartItems.length !== 0 && (
                    <div className='emptyTotal'>
                        <div className='clearCartButton'>
                            <button onClick={() => {
                                handleClearCart();
                                notify();
                            }}>Finish Purchase</button>
                        </div>
                        <div className='totalBox'>
                            <div className='total'>Total:</div>
                            <div className='price'>{total.toFixed(2)} <span className='currency'>{currency}</span></div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.shoppingCart.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
