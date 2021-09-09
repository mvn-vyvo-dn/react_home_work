import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../../store/addCart';

const Carts = () => {
  const dispatch = useDispatch();
  const listItemIds = JSON.parse(localStorage.getItem('listItemIds'));
  const items = JSON.parse(localStorage.getItem('items'));
  const [prods, setProds] = useState([localStorage.getItem('items')]);

  const removeFav = (e, item) => {
    e.preventDefault();
    const newProds = prods.map(e => {
      return e;
    });
    setProds(newProds);
    dispatch(toggleCart(item));
  };

  return (
    <div>
      <div className="container">
        <h2>List items in cart</h2>
        <ul className="product-list row">
          {
            items ?
              items.value.map(e => (
                <li key={e.id} className="col-medium-3">
                  <span className="product-img">
                    <img src={e.image} alt="product" />
                  </span>
                  <h4>{e.name}</h4>
                  <p className="product-desc">{e.description}</p>
                  <button className={`product-fav ${listItemIds.indexOf(e.id) !== -1 ? 'active' : ''}`} onClick={(event) => removeFav(event, e)}>Remove</button>
                </li>
            )) : ''
          }
        </ul>
      </div>
    </div>
  );
};
export default Carts;