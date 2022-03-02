import React, {useState} from 'react';
import PropTypes from'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

function Store(props) {
    const[products, setProducts] = useState(
        [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
          }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
          }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
          }]
    );
    const[icon, setIcon] = useState('view_list');
    const[cards, setCards] = useState(products);
    const[items, setItems] = useState(products);
    const onSwitch = (classIcon, e) => {
       setIcon(prevState => (classIcon === 'view_list') ? 'view_module' : 'view_list') }
    return (
    <>
        <IconSwitch
            icon= {icon}
            onSwitch={onSwitch}/>
            {(icon === 'view_list') ? <CardsView cards = {cards}/> :<ListView items = {items}/>}   
    </>
    )}
    Store.propTypes = {};
    export default Store;
