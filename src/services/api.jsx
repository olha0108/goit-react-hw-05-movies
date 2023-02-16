import axios from 'axios';
const API_KEY = 'ecb4ebe4446fc4aea8082bc07d38b413';

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchSearchMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

export const fetchGetMovieDetails = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchGetMovieCredits = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
export const fetchGetMovieReviews = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
