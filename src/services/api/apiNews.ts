import axios from "axios";

const apiKey = import.meta.env.VITE_NEWS_KEY

export async function fetchApiNews() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=fiis+OR+dividendos+OR+IFIX&language=pt&sortBy=publishedAt&apiKey=${apiKey}`)
    console.log(response.data);
    return response;
  } catch (err) {
    console.log(err);
  }
}

fetchApiNews();