 import axios from 'axios';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useParams, NavLink, Routes, Route, useLocation, Link} from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import { API_KEY } from 'utils/utils';
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
 axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

 
const MovieDetails = () => {
     
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  
  
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      

    }
    fetchMovieDetails();
  }, [movieId])

    const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const PLACEHOLDER = 'https://via.placeholder.com/182x273';
  
  return (
     <div>
      <Link className={css.LinkBackPage } to={ backLinkRef.current }> ← Go back</Link>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader/>}
       {movieDetails !== null &&
        <div>
          <div className={css.MovieDetailsContainer}>
            <div>
          <img className={css.MoviePoster} src={`${
            movieDetails.poster_path
              ? BASE_POSTER_URL + movieDetails.poster_path
              : PLACEHOLDER + '?text=' + movieDetails.original_title
                }`} alt="" />
            </div>
            <div className={css.MovieDetailsData}>
           <h1>{movieDetails.original_title}</h1>
          <p>Rating: {Math.round(movieDetails.vote_average)}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genreList}>{movieDetails.genres?.map(
           genre => (<li key={genre.id}>{genre.name}</li>)
          )}
              </ul>
              </div>
            </div>
          <div>
            <p>Aditional information</p>
            <div className={css.NavigateLink}>
              <NavLink className={css.linkMovieDetails } to="cast">Cast</NavLink>
              <NavLink className={css.linkMovieDetails } to="reviews">Reviews</NavLink>
            </div>
            <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={ <Reviews/> } />
              </Routes>
              </Suspense>
          </div>
        </div>
        
       }
     </div>
   )
 }
 
 export default MovieDetails
 