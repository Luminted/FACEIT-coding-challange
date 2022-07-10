import { API_TOURNAMENTS_URL } from '../constants/api';
import { ITournament } from '../typings';
import { request } from './request';

export const getTournaments = () =>
  request<ITournament[]>({
    endpoint: API_TOURNAMENTS_URL,
    config: {
      method: 'GET'
    }
  });
