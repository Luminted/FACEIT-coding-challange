import { API_TOURNAMENTS_URL } from '../constants/api';
import { ITournament } from '../typings';
import { request } from './request';

export const updateTournamentName = (id: string, name: string) =>
  request<ITournament>({
    endpoint: `${API_TOURNAMENTS_URL}/${id}`,
    config: {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name
      })
    }
  });
