import axios from "axios";
import { baseURL } from "../contants/constants";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance
