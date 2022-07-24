import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./banner.scss";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { useHistory } from "react-router-dom";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  //   const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=bd71f87d6b4cfbb6d5217d31ac72c415`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="oot ">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        modules={[Autoplay]}
        spaceBetween={0}
        autoplay={{ delay: 3000 }}
      >
        {movies.length > 0 &&
          movies
            .slice(0, 4)
            .map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <BannerItem
                    item={item}
                    className={`${isActive ? "active" : ""}`}
                  ></BannerItem>
                )}
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item, ...props }) {
  const background = `https://image.tmdb.org/t/p/original/${
    item ? item.backdrop_path : ""
  }`;

  return (
    <div
      className={`banner-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container gap-5 banner-slide__item__content">
        <div className=" banner-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview"> {item.overview}</div>
          <button className="px-6 py-3 font-medium text-white rounded-lg btns bg-primary">
            Watch Now
          </button>
        </div>
        <div className=" banner-slide__item__content__poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              item ? item.poster_path : ""
            }`}
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
export default Banner;
