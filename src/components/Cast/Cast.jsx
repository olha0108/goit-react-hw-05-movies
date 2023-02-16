import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'services/api';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  const { id, character, name, profile_path, original_name } = movieCast;

  return (
    <>
      <ul>
        {movieCast.map(movie => (
          <li key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${profile_path}`}
              alt={name}
            />
            <h3>{original_name}</h3>
            <p>As: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
