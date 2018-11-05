// http://www.omdbapi.com/?i=tt3896198&apikey=a4be5b01
const movie_api_key = `a4be5b01`;
const movie_api_url = `http://www.omdbapi.com/?apikey=${movie_api_key}`;
const youtube_api_key = `AIzaSyB0wkOxLniUEBrWiWZNeRitrNbRf2eWf4Q`;
const youtube_api_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtube_api_key}`;

function getMoviesByTitle (search, onSuccess, onError) {
  const url = `${movie_api_url}&t=${search}`;
  const settings = {
    cache: false,
    contentType: 'application/json',
    dataType: 'json',
    success: onSuccess,
    error: onError,
    type: 'GET'
  };
  return $.ajax(url, settings);
};

function getMoviesById (search, onSuccess, onError) {
  const url = `${movie_api_url}&i=${search}`;
  const settings = {
    cache: false,
    contentType: 'application/json',
    dataType: 'json',
    success: onSuccess,
    error: onError,
    type: 'GET'
  };
  return $.ajax(url, settings);
};

function getYouTubeAPI (q, onSuccess, onError) {
  const url = `${youtube_api_url}&q=${q}`;
  const settings = {
    cache: false,
    contentType: 'application/json',
    dataType: 'json',
    success: onSuccess,
    error: onError,
    type: 'GET'
  };
  return $.ajax(url, settings);
};

function onSuccess(data) {
  console.log(`successful`);
  console.log(data);
};
function onError(error) {
  console.log(error);
};
