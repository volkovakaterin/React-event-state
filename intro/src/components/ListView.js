import React from 'react';
import PropTypes from'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {

    return (
        <div className='items'>
          <ShopItem items = {props.items}/>  
        </div>
        
    )
}

ListView.propTypes = {};
    export default ListView;