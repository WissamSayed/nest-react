import axios from 'axios';
import * as constFile from './prestigeConst';

export const getUsers = () => {
  return axios
    .get(`${process.env.REACT_APP_API_KEY + constFile.GET_USERS}`, {})
    .then((x) => {
      return x.data;
    })
    .catch((error) => {
      return error;
    });
};
