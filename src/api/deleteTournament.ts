import { API_TOURNAMENTS_URL } from '../constants';
import { request } from './request';

export const deleteTournament = (id: string) =>
  request({
    endpoint: `${API_TOURNAMENTS_URL}/${id}`,
    config: {
      method: 'DELETE'
    }
  });
