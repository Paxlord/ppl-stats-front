import axios from "axios";

const uri = "http://localhost:5500/";
const paginationUrl = `${uri}/pagination/`

export const GetAllUsers = async (page) => {
  return axios.get(paginationUrl + `/${page}`);
}

