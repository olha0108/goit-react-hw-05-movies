import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'services/api';
import { MovieCastContainer } from './Cast.styled';
import { MovieCastItem } from './Cast.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }
  return (
    <MovieCastContainer>
      {movieCast.map(({ name, id, character, original_name, profile_path }) => (
        <MovieCastItem key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w276_and_h350_face/${profile_path}`}
            alt={name}
          />
          <h3>{original_name}</h3>
          <p>Character: {character}</p>
        </MovieCastItem>
      ))}
    </MovieCastContainer>
  );
};
