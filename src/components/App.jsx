import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
};
