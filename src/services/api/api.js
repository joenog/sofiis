import axios from "axios";

const API_URL = 'https://brapi.dev/api/quote/';

async function fetchApi(codeFi) {
  try {
    const response = await axios.get(`${API_URL}${codeFi}?token=${'seRYmjyuvqd3rqixq2RLqS'}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e)
    throw error;
  }
}

export default fetchApi