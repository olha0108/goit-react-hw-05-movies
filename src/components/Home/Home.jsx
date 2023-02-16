import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMoviesTrending);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {moviesTrending.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
