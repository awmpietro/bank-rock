import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

export default axios.create({
  baseURL: URL,
  crossdomain: true,
  withCredentials: true,
});
