import axios from 'axios';
const API_KEY = '67983da9f1b0244a3f38bd567d5477a8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get('trending/all/day?', {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      include_adult: false,

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

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      include_adult: false,
    },
  });

  return data;
};

export const fetchCastInfo = async id => {
  const { data } = await axios.get(`movie/${id}/credits?`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      include_adult: false,
    },
  });

  return data;
};
export const fetchReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
      include_adult: false,
    },
  });

  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(`search/movie?api_key=${API_KEY}`, {
    params: {
      include_adult: false,
      language: 'en-US',
      query: `${query}`,
    },
  });

  return data.results;
};
