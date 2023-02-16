import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeContainer } from './Home.styled';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMoviesTrending);
  }, []);

  return (
    <HomeContainer>
      <h1>Trending today</h1>
      <ul>
        {moviesTrending.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
};
