import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import Banner2 from "./components/banner/Banner2";
import Main from "./components/layout/Main";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5SdzmoPnXHOM4_HLtbcU91YIBooMKMuQ",
  authDomain: "movie2-36a51.firebaseapp.com",
  projectId: "movie2-36a51",
  storageBucket: "movie2-36a51.appspot.com",
  messagingSenderId: "116574885027",
  appId: "1:116574885027:web:7e87996a792fb8aa1a5b16",
  measurementId: "G-K5GKCEYQ8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
                  <Banner2></Banner2>
                  <HomePage></HomePage>
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
