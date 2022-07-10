import { Actions } from '../actions';
import { ITournament } from '../typings';
import {
  GET_TOURNAMENTS_FAIL,
  GET_TOURNAMENTS_START,
  GET_TOURNAMENTS_SUCCESS
} from '../actions';

interface ITournamentState {
  tournaments: ITournament[];
  error: string | null;
  isLoading: boolean;
}

const initialState: ITournamentState = {
  tournaments: [],
  error: null,
  isLoading: false
};

export default function tournaments(
  state: ITournamentState = initialState,
  action: Actions
) {
  switch (action.type) {
    case GET_TOURNAMENTS_START:
      return {
        ...initialState,
        isLoading: true
      };
    case GET_TOURNAMENTS_SUCCESS:
      return {
        ...initialState,
        tournaments: action.tournaments
      };
    case GET_TOURNAMENTS_FAIL:
      return {
        ...initialState,
        error: action.error
      };
    default:
      return state;
  }
}
