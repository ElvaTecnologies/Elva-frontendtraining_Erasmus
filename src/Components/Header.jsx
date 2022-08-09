import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.left__option}>
        <div className={classes.brand}>
          <h3>
            F<span>oo</span>dy
          </h3>
        </div>
        <nav className={classes.nav}>
          <a href='/' className={classes.active}>
            Home
          </a>
          <a href='/'>Menu</a>
          <a href='/'>About Us</a>
          <a href='/'>Contact</a>
        </nav>
      </div>
      <div className={classes.right__options}>
        <button className={classes.cart__btn}>Cart icon</button>
        <button className={classes.signup__btn}>Sign up</button>
      </div>
    </div>
  );
};

export default Header;
