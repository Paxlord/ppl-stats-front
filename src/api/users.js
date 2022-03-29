import axios from "axios";

const uri = "http://localhost:5500/users/";
const paginationUrl = `${uri}pagination`;
const countUrl = `${uri}count`;
const genderUrl = `${uri}stats/gender`;
const countryUrl = `${uri}stats/country`;
const localUrl = `${uri}localisations`;



export const GetAllUsers = async (page) => {
  return axios.get(paginationUrl + `/${page}`);
}

export const GetUsersCount = async () => {
  return axios.get(countUrl);
}

export const GetGenderCount = async ()=> {
  return axios.get(genderUrl);
}

export const GetCountryCount = async () => {
  return axios.get(countryUrl);
}

export const Get100Users = async () => {
  return axios.get(localUrl);
}

export const GetUserByPage = async (page, params) => {
  return axios.get(`${paginationUrl}/${page}`, {
    params
  });
}

export const GetOneUser = async (uuid) => {
  console.log(uuid);
  return axios.get(`${uri}profile/${uuid}`);
}

