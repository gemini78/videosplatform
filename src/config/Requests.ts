
// https://api.themoviedb.org/3
// 2414f7dedf5841fa60be914fc60d9021


const API_KEY = "2414f7dedf5841fa60be914fc60d9021";

const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
}

export default requests;