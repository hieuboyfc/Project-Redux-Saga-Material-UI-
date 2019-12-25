import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3000/task

const url = 'tasks';

export const getListTask = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};