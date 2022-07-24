import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(
          "https://movie-web-app-rho.vercel.app/static/media/footer-bg.67e95f05e76a8cebf7e2.jpg"
        )`,
      }}
    >
      <div className="container footer__content">
        <div className="container mx-auto footer__content__logo">
          <div className="logo">
            <img
              src="https://movie-web-app-rho.vercel.app/static/media/tmovie.67797e942e59deb68592.png"
              alt=""
            />
            <NavLink to={"/"}> NetFlix </NavLink>
          </div>
        </div>
        <div className=" footer__content__menus">
          <div className=" footer__content__menu">
            <span className="">Home </span>
            <span>Contact us</span>
            <span>Term of services</span>
            <span>About us</span>
          </div>
          <div className=" footer__content__menu">
            <span> Live </span>
            <span>FAQ</span>
            <span>Premium</span>
            <span> Pravacy policy</span>
          </div>
          <div className="footer__content__menu">
            <span>You must watch </span>
            <span>Recent release</span>
            <span>Top IMDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
