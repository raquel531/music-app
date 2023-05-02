import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart, removeFromCart } from '../../redux/actions/shoppingCart.js';
import { faCartArrowDown, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


import './TrackCard.scss'

function TrackCard(props) {

    const { track, index, searchQuery, cartItems } = props
    const { artworkUrl100, artistName, collectionName, trackPrice, trackName } = track

    console.log('trackCard Cart Items:',cartItems)

    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const notify = () => toast("Added to Cart");


    const addItemToCart = (item) => {
        if (addedToCart[item.trackId]) {
            dispatch(removeFromCart(item.trackId));
            const newAddedToCart = { ...addedToCart };
            delete newAddedToCart[item.trackId];
            setAddedToCart(newAddedToCart);
        } else {
            dispatch(addToCart(item));
            setAddedToCart({ ...addedToCart, [item.trackId]: true });
        }
    };

    const highlightMatchingLetters = (text, query) => {
        const index = text.toLowerCase().indexOf(query);
        if (index === -1) {
            return text;
        }
        const before = text.substring(0, index);
        const match = text.substring(index, index + query.length);
        const after = text.substring(index + query.length);
        return (
            <>
                {before}
                <span className="highlight">{match}</span>
                {after}
            </>
        );
    };

    return (
        <div className="card" key={index}>
            <div className="box">
                <div className="img">
                    <img src={artworkUrl100} alt="Album Artwork" />
                </div>
                <div className="info">
                    <p className="artist">{artistName}</p>
                    <p className="collection">{collectionName}</p>
                    <div key={track.id} className="price">
                        {`${trackPrice} USD`}</div>
                    <div className="icon" onClick={() => { addItemToCart(track); notify() }}>
                        {cartItems.some(t => t.trackId === track.trackId) ? (
                            <FontAwesomeIcon id='redCart' icon={faCartArrowDown} style={{}} />
                        ) : (
                            <FontAwesomeIcon icon={faCartPlus} />
                        )}
                    </div>

                </div>
            </div>
            <div className="name">
                <h4>{highlightMatchingLetters(trackName, searchQuery)}</h4>
            </div>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.shoppingCart.items,
    };
};


export default connect(mapStateToProps)(TrackCard)