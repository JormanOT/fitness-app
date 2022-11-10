const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPI_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPI_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}

export const fetchData = async (url, key) => {
  const response = await fetch(url, key === 'exercises' ? exercisesOptions : youtubeOptions);
  const data = await response.json();
  return data;
}

export const API = {
  Exercises: 'https://exercisedb.p.rapidapi.com/exercises',
  Youtube: 'https://youtube-search-and-download.p.rapidapi.com'
}