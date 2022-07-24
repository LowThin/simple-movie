import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import Banner2 from "./components/banner/Banner2";
import Main from "./components/layout/Main";

// import HomePage from "./pages/HomePage";
// import MovieDetailPage from "./pages/MovieDetailPage";
// import MoviePage from "./pages/MoviePage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner2></Banner2> <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
