import React from 'react';
import PropTypes from'prop-types';

function ShopItem(props) {
    const items = props
    const itemsSneakers = items.items.map((item) =>
    <div key={items.items.indexOf(item)} className='shop_item'>
<img className='item_img_sneakers' src={item.img} alt='sneakers'/>
<h4 className='item_name'>{item.name}</h4>
<h5 className='item_color'>{item.color}</h5>
<span className='item_price'>{`$${item.price}`}</span>
<button className='item_btn_add'>Add to cart</button>
        </div>)
    return (
        <>
        {itemsSneakers}
        </>
        
    )
}

ShopItem.propTypes = {};
    export default ShopItem;