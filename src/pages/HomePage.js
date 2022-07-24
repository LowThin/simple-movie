import React, { Fragment } from "react";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="container mx-auto mb-10 movies-layout">
        <h3 className="mb-10 text-3xl font-bold text-white capitalize ">
          Now Playing
        </h3>
        <MovieList></MovieList>
      </section>
      <section className="container px-2 mx-auto movies-layout">
        <h3 className="mb-10 text-3xl font-bold text-white capitalize ">
          Top Rated
        </h3>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="container px-2 mx-auto mb-10 movies-layout">
        <h3 className="mb-10 text-3xl font-bold text-white capitalize ">
          Upcoming
        </h3>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
