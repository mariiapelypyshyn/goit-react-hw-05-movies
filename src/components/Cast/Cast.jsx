import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { API_KEY } from 'utils/utils';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Cast = () => {

    const { movieId } = useParams();
     const [cast, setCast] = useState(null);

     useEffect(() => {
    const fetchCast = async () => {
      try {
        const {data} = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
          setCast(data.cast);
          console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);
    
    const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
    const PLACEHOLDER = 'https://via.placeholder.com/182x273';
     
  return (
    <div>
          <ul className={css.CastList}>
      {cast !== null && cast.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
              <img className={css.ProfileImg}
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                 {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
   </ul>
    </div>
  )
}

export default Cast
