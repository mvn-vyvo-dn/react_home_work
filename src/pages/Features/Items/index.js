import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import { toggleCart } from '../../../store/addCart';

const Items = () => {
  const dispatch = useDispatch();
  const listFavItems = JSON.parse(localStorage.getItem('listFavItems'));
  const listItemIds = JSON.parse(localStorage.getItem('listItemIds'));

  const [prods, setProds] = useState([
    {
      id: 1,
      favs: false,
      name: 'Food A',
      price: 100000,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://www.couponraja.in/theroyale/wp-content/uploads/2017/07/18-healthy-ready-to-eat-food-brands-in-india-631x480.jpg'
    },
    {
      id: 2,
      favs: false,
      name: 'Food B',
      price: 200000,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://www.couponraja.in/theroyale/wp-content/uploads/2017/07/britannia-1.jpg'
    },
    {
      id: 3,
      favs: false,
      name: 'Food C',
      price: 300000,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://www.couponraja.in/theroyale/wp-content/uploads/2017/07/kissan-1.jpg'
    },
    {
      id: 4,
      favs: false,
      name: 'Food D',
      price: 400000,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'https://daiyafoods.com/wp-content/uploads/2021/08/DF-NM-210715-1430-July-E-Newsletter-Assets-Header-1600x1000-WEBSITE.jpg'
    }
  ]);

  const handleFav = (e, item) => {
    // console.log(item);
    e.preventDefault();
    const newProds = prods.map(e => {
      return e;
    });
    setProds(newProds);
    dispatch(toggle(item));
  }

  const addCart = (e, item) => {
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
        <h2>Foods</h2>
        <ul className="product-list row">
          {
            prods.map(e => (
              <li key={e.id} className="product-item col-medium-3">
                <Link to="#" className="product-img">
                  <img src={e.image} alt="product" />
                  <span className={`product-fav ${listFavItems && listFavItems.indexOf(e.id) !== -1 ? 'active' : ''}`} onClick={(event) => handleFav(event, e)}><FaHeart /></span>
                </Link>
                <h4 className="product-name">{e.name}</h4>
                <p className="product-desc">{e.description}</p>
                <button type="button" onClick={(event) => addCart(event, e)}>
                  {`${listItemIds && listItemIds.indexOf(e.id) !== -1 ? 'Remove' : 'Add cart'}`}  
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Items;
