import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'utils/utils';
 axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

     useEffect(() => {
    const fetchReviews = async () => {
      try {
        const {data} = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
          setReviews(data.results);
          console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
     }, [movieId]);
  
  return (
      <div>
          <ul>
              {reviews.length === 0 ? (<p>We don't havy any reviews for this movie</p>) : (reviews.map(({ id, author, content }) => (
                  <li key={id}>
                      <p>Author: {author}</p>
                      <p>{content }</p>
                  </li>)
              ))}
     </ul>
    </div>
  )
}

export default Reviews
