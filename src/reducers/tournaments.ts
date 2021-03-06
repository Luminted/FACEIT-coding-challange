import {
  Actions,
  CREATE_TOURNAMENT_SUCCESS,
  DELETE_TOURNAMENT_SUCCESS,
  UPDATE_TOURNAMENT_NAME_SUCCESS
} from '../actions';
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
  abortController: AbortController | null;
}

const initialState: ITournamentState = {
  tournaments: [],
  error: null,
  isLoading: false,
  abortController: null
};

export default function tournaments(
  state: ITournamentState = initialState,
  action: Actions
) {
  switch (action.type) {
    case GET_TOURNAMENTS_START:
      return {
        ...initialState,
        isLoading: true,
        abortController: action.abortController
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
    case UPDATE_TOURNAMENT_NAME_SUCCESS:
      return {
        ...initialState,
        abortController: state.abortController,
        tournaments: state.tournaments.map(tournament => {
          const { tournament: updatedTournamet } = action;
          if (tournament.id === updatedTournamet.id) {
            return updatedTournamet;
          }
          return tournament;
        })
      };
    case DELETE_TOURNAMENT_SUCCESS:
      return {
        ...initialState,
        abortController: state.abortController,
        tournaments: state.tournaments.filter(
          tournament => tournament.id !== action.tournamentId
        )
      };
    case CREATE_TOURNAMENT_SUCCESS:
      return {
        ...initialState,
        abortController: state.abortController,
        tournaments: [action.tournament, ...state.tournaments]
      };
    default:
      return state;
  }
}
