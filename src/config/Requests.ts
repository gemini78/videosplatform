
// https://api.themoviedb.org/3
// 2414f7dedf5841fa60be914fc60d9021


const API_KEY = "2414f7dedf5841fa60be914fc60d9021";

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;