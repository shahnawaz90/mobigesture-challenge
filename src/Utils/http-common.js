import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
});
