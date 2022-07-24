export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "bd71f87d6b4cfbb6d5217d31ac72c415";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie/";
const tmdbSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url} `,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url} `,
  getMovieSearch: (query, page) =>
    `${tmdbSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
};
