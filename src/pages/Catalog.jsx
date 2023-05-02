import React from 'react';
import TrackList from '../components/catalog/TrackList.jsx'
import ShoppingCart from '../components/shoppingcart/ShoppingCart.jsx';
import './Catalog.scss'

const Catalog = ({isActive}) => {

    
    
    return (
        <div className='catalog-page'>
            <div className='trackList'>
                <TrackList />
            </div>
            <div >
                <ShoppingCart  isActive={isActive}/>
            </div>

        </div>
    );
};

export default Catalog;