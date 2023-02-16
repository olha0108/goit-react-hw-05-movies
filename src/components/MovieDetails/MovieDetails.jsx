import { useState, useEffect, Suspense } from 'react';
import { fetchGetMovieDetails } from 'services/api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { MovieDetailsLeft } from './MovieDetails.styled';
import { MovieDetailsRight } from './MovieDetails.styled';
import { MovieDetailsContainer } from './MovieDetails.styled';
import { MovieDetailsFooter } from './MovieDetails.styled';
import { BackLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();

  const { movieId } = useParams();
  useEffect(() => {
    fetchGetMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  if (!movieDetails) {
    return;
  }

  const { poster_path, title, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <MovieDetailsContainer>
        <MovieDetailsLeft>
          <BackLink to={backLinkHref}>Go back </BackLink>
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
            alt={title}
          />
        </MovieDetailsLeft>
        <MovieDetailsRight>
          <h2>{original_title}</h2>
          <p>User Score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(prev => prev.name).join(' ')}</p>
        </MovieDetailsRight>
      </MovieDetailsContainer>
      <MovieDetailsFooter>
        <p>Additional information</p>
        <hr />
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense>
          <Outlet />
        </Suspense>
      </MovieDetailsFooter>
    </>
  );
};
