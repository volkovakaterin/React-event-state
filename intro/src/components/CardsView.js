import React from 'react';
import PropTypes from'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {

    return (
        <div className='cards'>
        <ShopCard cards = {props}/>
        </div>
        
    )
}

CardsView.propTypes = {};
    export default CardsView;