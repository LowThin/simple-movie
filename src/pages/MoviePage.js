import React, { Fragment, useDebugValue, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../components/config";
import MovieList from "../components/MovieList";
import MovieCard from "../components/movies/MovieCard";
import useDebounce from "../hooks/useDeBounce";
import ReactPaginate from "react-paginate";
import "./moviepage.scss";
import "../index.scss";
// https://api.themoviedb.org/3/search/movie?api_key=
const itemsPerPage = 20;
const MoviePage = () => {
  // We start with an empty list of items.

  //
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 1000);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];

  //  Phan trang
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data) return;
    // Fetch items from another resources.

    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="container py-10 ">
      <div className="flex mb-10 ">
        <div className="flex-1">
          <input
            type="text"
            name=""
            className="w-full p-4 text-black border border-gray-200 rounded-lg outline-none focus:border-blue-500"
            placeholder=" Search here..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white rounded-lg outline-none bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>{" "}
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 rounded-full border-primary border-t-transparent animate-spin "></div>
      )}
      <div className="grid grid-cols-4 gap-10 movie-list">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<Prev"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
