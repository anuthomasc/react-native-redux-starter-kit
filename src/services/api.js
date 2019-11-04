import { fetchMethod } from '../services/fetchAPI'
import {
  BASE_PATH,
  HOME_URL
} from '../helpers/constants';

export const getHome = (page) => {
  return fetchMethod.get(BASE_PATH + HOME_URL + page);
}

