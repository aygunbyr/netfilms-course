const API_URL = 'https://api.themoviedb.org/3';

export const fetchMovieApi = async (pathname, query = '') => {
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );

    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getSingleCategory = async (genreId) => {
  return fetchMovieApi('/discover/movie', `with_genres=${genreId}`);
};

export const getCategories = async () => {
  return fetchMovieApi('/genre/movie/list', 'page=1');
};

export const getTopRatedMovies = async () => {
  return fetchMovieApi('/movie/top_rated', 'page=1');
};

export const getPopularMovies = async () => {
  return fetchMovieApi('/movie/popular', 'page=1');
};

export const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};
