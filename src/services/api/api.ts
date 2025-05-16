import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

async function fetchApi(codeFi: string) {
  try {
    const response = await axios.get(
      `https://brapi.dev/api/quote/${codeFi}?token=${apiKey}`,
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw Error;
  }
}

export default fetchApi;
