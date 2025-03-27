import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    // Get the entire response from the API
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    
    // Log the full response to understand its structure
    console.log("API Response:", response);

    // Now access the actual data
    return response.data; // Return the entire response data, which contains the relevant fields like 'contents'
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw error; // Throw the error so that it can be handled by the calling function
  }
};
