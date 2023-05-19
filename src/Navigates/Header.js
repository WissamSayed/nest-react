import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Assets/Styles/Header.module.css';
// import logo from '../images/logo.jpg';

function Header() {
  return (
    <div className={classes['headerContainer']}>
      <div className={classes['logocontainer']}>
        {/* <img src={logo} alt="logo" className={classes["logo" /> */}
      </div>
      <nav>
        <div className={classes['list2']}>
          <NavLink exact to="/" className={classes['listItem']}>
            Home
          </NavLink>
          <NavLink exact to="/users" className={classes['listItem']}>
            Users
          </NavLink>
          {/* <NavLink
            exact
            to="/addBook"
            className={classes["listItem"
            activeClassName={classes["active"
          >
            Add Book
          </NavLink> */}
        </div>
      </nav>
      <div className={classes['buttonContainer']}>
        <button className={classes['loginButton']}>Sign in</button>
        <button className={classes['getStartedButton']}> Sign up</button>
      </div>
    </div>
  );
}

export default Header;
