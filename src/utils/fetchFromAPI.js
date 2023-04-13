import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {

  url: BASE_URL,
  params: {
    maxResults: "52",
  },
  headers: {
    "X-RapidAPI-Key": '8d713aef97msh96acb9a92f5fda8p173a8fjsne112165ec86a',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
