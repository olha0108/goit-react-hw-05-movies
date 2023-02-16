import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';
import { SearchbarHeader } from './Movies.styled';
import { SearchForm } from './Movies.styled';
import { SearchFormbutton } from './Movies.styled';
import { SearchFormbuttonlabel } from './Movies.styled';
import { SearchForminput } from './Movies.styled';
import { MoviesGalleryItem } from './Movies.styled';
import { MoviesGalleryContainer } from './Movies.styled';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({
      query: evt.target.elements.search.value.trim().toLowerCase(),
    });
    //   evt.target.reset();
  };

  const location = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchSearchMovies(search).then(setSearchMovies);
  }, [search]);

  return (
    <>
      <SearchbarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchForminput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchFormbutton type="submit">
            <SearchFormbuttonlabel>Search</SearchFormbuttonlabel>
          </SearchFormbutton>
        </SearchForm>
      </SearchbarHeader>

      <MoviesGalleryContainer>
        {searchMovies.map(({ id, original_title }) => (
          <div key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <MoviesGalleryItem>{original_title}</MoviesGalleryItem>
            </Link>
          </div>
        ))}
      </MoviesGalleryContainer>
    </>
  );
};
