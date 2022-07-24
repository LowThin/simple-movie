import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movies",
  },
];

const Header2 = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  });
  return (
    <div className="header" ref={headerRef}>
      <div className=" header__wrap">
        <div className="logo">
          <img
            src="https://movie-web-app-rho.vercel.app/static/media/tmovie.67797e942e59deb68592.png"
            alt=""
          />
          <NavLink to={"/"}> NetFlix </NavLink>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${item === active ? "active" : ""}`}>
              <NavLink to={item.path}>{item.display}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header2;
