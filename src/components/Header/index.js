import React from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { toggle } from '../../store/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const favourits = useSelector(state => state.fav.value);
  const carts = useSelector(state => state.item.value);
  const userAction = useSelector(state => state.userAction.value);
  const listFavItems = JSON.parse(localStorage.getItem('listFavItems'));
  const listItemIds = JSON.parse(localStorage.getItem('listItemIds'));
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    dispatch(toggle('Logout'));
  }

  return (
    <header className="page-header">
      <div className="container">
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">Food</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li>
            <NavLink activeClassName="active" to="/favourites">
              <span className="wrap-fav-coutner">
                <FaHeart />
                {!!listFavItems && !!listFavItems.length && <span>{listFavItems.length}</span>}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/carts">
              <span className="wrap-item-counter">
                <FaShoppingCart />
                {!!listItemIds && !!listItemIds.length && <span>{listItemIds.length}</span>}
              </span>
            </NavLink>
          </li>
          <li>
            { userAction == 'Login' ? <span className="logout" onClick={handleLogout}>Logout</span> : <NavLink to="/login">Login</NavLink> }
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
