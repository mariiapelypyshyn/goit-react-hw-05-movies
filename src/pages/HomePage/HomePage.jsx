import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from 'components/MovieList/MoviesList';
import Loader from 'components/Loader/Loader';
import css from './HomePage.module.css';
import { API_KEY } from 'utils/utils';
 axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const HomePage = () => {

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          `/trending/movie/week?api_key=${API_KEY}`
        );
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  
    return (
      <div className={css.HomePageContainer}>
        {error !== null && <p>{error}</p>}
      {isLoading && <Loader/>}
        <h1 className={css.HomePageTitle}>Trending today</h1>
        <MoviesList movies={movies} />
      </div>
    )
  }


export default HomePage;

