import axios from 'axios';
const API_KEY = '67983da9f1b0244a3f38bd567d5477a8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get('trending/all/day?', {
    params: {
      api_key: `${API_KEY}`,
      // per_page: `${PER_PAGE}`,
      // page: `${currentPage}`,
    },
  });
  //   const images = normalisedImages(response.data.hits);
  //   const totalPages = Math.ceil(response.data.totalHits / PER_PAGE);
  const movies = normalisedMovies(results);
  return movies;
};
const normalisedMovies = movies =>
  movies.map(({ id, original_title, poster_path, name }) => ({
    id,
    original_title,
    poster_path,
    name,
  }));
