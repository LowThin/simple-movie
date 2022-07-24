import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  //   const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=bd71f87d6b4cfbb6d5217d31ac72c415`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 ">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] "></div>
      <img
        className="object-cover w-full h-full rounded-lg position"
        src={`https://image.tmdb.org/t/p/original/${
          item ? item.poster_path : ""
        }`}
        alt=""
      />
      <div
        className=""
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            item ? item.poster_path : ""
          }`,
        }}
      ></div>

      <div className="absolute w-full bottom-5 left-5">
        <h3 className="text-3xl font-semibold text-white">
          {item ? item.title : ""}
        </h3>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="p-4 py-2 font-semibold text-white border border-white rounded-md">
            Action
          </span>
          <span className="p-4 py-2 font-semibold text-white border border-white rounded-md">
            Adventure
          </span>
          <span className="p-4 py-2 font-semibold text-white border border-white rounded-md">
            Drama
          </span>
        </div>
        <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
}
export default Banner;
