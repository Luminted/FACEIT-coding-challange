import { API_TOURNAMENTS_URL } from '../constants';
import { ITournament } from '../typings';
import { request } from './request';

export const createTournament = (name: string) =>
  request<ITournament>({
    endpoint: API_TOURNAMENTS_URL,
    config: {
      method: 'POST',
      body: JSON.stringify({
        name
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  });
