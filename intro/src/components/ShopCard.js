import React from 'react';
import PropTypes from'prop-types';

function ShopCard(props) {
    const cards = props.cards.cards
    const cardsSneakers = cards.map((card) =>
    <div key={cards.indexOf(card)} className='shop_card'>
<img className='img_sneakers' src={card.img} alt='sneakers'/>
<h4 className='card_name'>{card.name}</h4>
<h5 className='card_color'>{card.color}</h5>
<span className='card_price'>{`$${card.price}`}</span>
<button className='btn_add'>Add to cart</button>
        </div>)
    return (
        <>
        {cardsSneakers}
        </>
        )
}

ShopCard.propTypes = {};
    export default ShopCard;