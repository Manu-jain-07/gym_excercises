export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const exerciseOptionsAll = { method: 'GET', url: 'https://exercisedb.p.rapidapi.com/exercises', 
  params: { limit: '1000', offset: '0' }, headers: { 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, 
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com' } };

    export const fetchDataAll = async () => {
      const { url, params, headers, method } = exerciseOptionsAll;
      const queryString = new URLSearchParams(params).toString();
      const fullUrl = `${url}?${queryString}`;
  
      const options = {
          method,
          headers
      };
  
      try {
          const response = await fetch(fullUrl, options);
          
          // Check if the response is okay (status is in the range 200-299)
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;  // Re-throw the error after logging it
      }
  };

  
 