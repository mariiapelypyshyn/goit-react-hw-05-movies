import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import HomePage from "pages/HomePage/HomePage";
// import MoviesPage from "pages/MoviesPage/MoviesPage";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";


const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails/> } />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </Suspense>
      </Layout>
  );
};
