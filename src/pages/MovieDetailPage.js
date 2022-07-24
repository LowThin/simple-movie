import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../components/config";
import MovieCard from "../components/movies/MovieCard";
import "./moviedetailpage.scss";
import "../index.scss";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=bd71f87d6b4cfbb6d5217d31ac72c415
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieList(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  console.log(data);
  const background = `https://image.tmdb.org/t/p/original/${
    backdrop_path ? backdrop_path : ""
  }`;
  const backgroundposter = `https://image.tmdb.org/t/p/original/${
    poster_path ? poster_path : ""
  }`;
  return (
    <>
      <div
        className="bannerdetail"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className=" movie-content">
          <div className="movie-content__poster">
            <div
              className="movie-content__poster__img"
              style={{ backgroundImage: `url(${backgroundposter})` }}
            ></div>
          </div>
          <div className="movie-content__info">
            <div className="title">{title ? title : "dasasas"}</div>
            <div className="flex gap-5 genres">
              {genres.length > 0 &&
                genres.slice(0, 5).map((item, index) => (
                  <span
                    className="px-5 py-2 border border-gray-400 rounded-2xl"
                    key={index}
                  >
                    {item.name}
                  </span>
                ))}
            </div>
            <p className="overview">{overview ? overview : ""}</p>
            <div className="cast">
              <div className="section_header">
                <h2 className="text-4xl">Cast:</h2>
                <div className="grid gap-4 list_cast grid-col-4">
                  {" "}
                  <MoviesCredits></MoviesCredits>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-96 list">
        <MovieVideos></MovieVideos>
        <MovieSimilar></MovieSimilar>
      </div>
    </>
  );
};

function MoviesCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;

  return (
    <>
      <div className="grid grid-cols-4">
        {cast.slice(0, 4).map((item) => (
          <div className="text-center cast-item" key={item.id}>
            <img
              src={tmdbAPI.imageOriginal(item.profile_path)}
              alt=""
              className="w-full h-[160px] object-contain "
            />
            <h3 className="text-xl">{item.original_name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);

  return (
    <Fragment>
      <div className="py-10 ">
        {results.slice(0, 4).map((item) => (
          <div
            className="w-full mb-10 aspect-video page-container"
            key={item.id}
          >
            <h3 className="mb-5 text-3xl font-bold "> {item.name}</h3>
            <iframe
              width="1046"
              height="411"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="có hẹn với thanh xuân - MONSTAR | official music video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="object-fill w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);
  return (
    <div div className="py-10 ">
      <h3 className="text-3xl font-bold text-white capitalize">
        SimiLar Movie
      </h3>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
export default MovieDetailPage;
