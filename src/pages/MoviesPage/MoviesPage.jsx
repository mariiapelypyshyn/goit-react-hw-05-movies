import React, { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MoviesList';
import css from './MoviesPage.module.css';
import { API_KEY } from 'utils/utils';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryValue = searchParams.get('query');
  console.log('queryValue', queryValue);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    console.log('value', value);
    setSearchParams({ query: value });
  }
  
  useEffect(() => {
    if (!queryValue) return;
    
    const fetchSearchedMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          `search/movie?api_key=${API_KEY}&query=${queryValue}&language=en-US&page=1&include_adult=false`
        );
        setSearchedMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedMovies();
  }, [queryValue])

    return (
      <div>
        <form className={css.SearchForm } onSubmit={onFormSubmit}>
          <input className={css.InputField } type="text" name="searchKey" required />
          <button type="submit">Search</button>
        </form>
        <ul>
         {error !== null && <p>{error}</p>}
          {isLoading && <Loader />}
          {searchedMovies !== null && <MoviesList movies={searchedMovies}/>}
        </ul>
        
      </div>
    )
  }
export default MoviesPage;
