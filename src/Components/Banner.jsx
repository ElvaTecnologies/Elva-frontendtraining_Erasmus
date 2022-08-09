import React from "react";
import classes from "./Banner.module.css";

import BannerImg from "../assets/bannerImg.png";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.left__txt}>
        <h2>it's not just Food, It's an Experience.</h2>
        <div className={classes.txt__buttons}>
          <button className={classes.view__more}>View Menu</button>
          <button className={classes.book__table}>Book a Table</button>
        </div>
        <div className={classes.reviews}>
          <h4>Reviews</h4>
          <div className={classes.img__overlay}>
            <div className={classes.img__wrapper}>
              <img src={BannerImg} alt='' />
              <img src={BannerImg} alt='' />
              <img src={BannerImg} alt='' />
              <img src={BannerImg} alt='' />
              <img src={BannerImg} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right__img}>
        <img src={BannerImg} alt='banner' />
      </div>
    </div>
  );
};

export default Banner;
