const Key = 'b86817a5267dd3f2091e8e00022b59b5'

const requests =  {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&querry=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`,
}

export default requests