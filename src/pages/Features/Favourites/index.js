import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import { FaHeart } from 'react-icons/fa';

const Favourites = () => {
  const dispatch = useDispatch();
  // const favoutire = useSelector(state => state.fav.value);
  const listFavItems = JSON.parse(localStorage.getItem('listFavItems'));
  const favourites = JSON.parse(localStorage.getItem('favourites'));
  const [prods, setProds] = useState([localStorage.getItem('favourites')]);

  const removeFav = (e, item) => {
    e.preventDefault();
    const newProds = prods.map(e => {
      return e;
    });
    setProds(newProds);
    dispatch(toggle(item));
  };

  return (
    <div>
      <div className="container">
        <h2>List favourites</h2>
        <ul className="product-list row">
          {
            favourites ?
              favourites.value.map(e => (
                <li key={e.id} className="col-medium-3">
                  <span className="product-img">
                    <img src={e.image} alt="product" />
                    <span className={`product-fav ${listFavItems.indexOf(e.id) !== -1 ? 'active' : ''}`} onClick={(event) => removeFav(event, e)}><FaHeart /></span>
                  </span>
                  <h4>{e.name}</h4>
                  <p className="product-desc">{e.description}</p>
                </li>
            )) : ''
          }
        </ul>
      </div>
    </div>
  );
};
export default Favourites;