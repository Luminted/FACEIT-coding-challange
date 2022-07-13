import { API_TOURNAMENTS_URL } from '../constants';
import { ITournament } from '../typings';
import { request } from './request';

export const getTournaments = (searchInput = '', abortSignal?: AbortSignal) =>
  request<ITournament[]>({
    endpoint: `${API_TOURNAMENTS_URL}/?q=${searchInput}`,
    config: {
      method: 'GET',
      signal: abortSignal
    }
  });
