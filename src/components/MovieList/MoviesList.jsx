import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('location: ', location);
  
  return (
      <ul>
        {movies !== null && movies.map(({ id, original_title }) => (
          <li className={css.MoviesListItem } key={id}>
            <Link state={{ from: location }}to={`/movies/${id}`}>
              <h3>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
   
  )
}

export default MoviesList;
