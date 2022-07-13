import { getTournaments, updateTournamentName } from '../api';
import { AppThunk } from '../store';
import { ITournament } from '../typings';
import { TournamentFetchError } from '../constants';
import { deleteTournament } from '../api/deleteTournament';
export interface IGetTournamentsStart {
  type: typeof GET_TOURNAMENTS_START;
}

export interface IGetTournamentSuccess {
  type: typeof GET_TOURNAMENTS_SUCCESS;
  tournaments: ITournament[];
}

export interface IGetTournamentFail {
  type: typeof GET_TOURNAMENTS_FAIL;
  error: string;
}

export interface IUpdateTournamentNameSuccess {
  type: typeof UPDATE_TOURNAMENT_NAME_SUCCESS;
  tournament: ITournament;
}

export interface IDeleteTournamentSuccess {
  type: typeof DELETE_TOURNAMENT_SUCCESS;
  tournamentId: string;
}

export const GET_TOURNAMENTS_START = 'GET_TOURNAMENTS_START';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const GET_TOURNAMENTS_FAIL = 'GET_TOURNAMENTS_FAIL';

export const UPDATE_TOURNAMENT_NAME_SUCCESS = 'UPDATE_TOURNAMENT_NAME_SUCCESS';

export const DELETE_TOURNAMENT_SUCCESS = 'DELETE_TOURNAMENT_SUCCESS';

export const getTournamentsStart: IGetTournamentsStart = {
  type: GET_TOURNAMENTS_START
};

export const getTournamentSuccess = (
  tournaments: ITournament[]
): IGetTournamentSuccess => ({
  type: GET_TOURNAMENTS_SUCCESS,
  tournaments
});

export const getTournamentsFail = (error: string): IGetTournamentFail => ({
  type: GET_TOURNAMENTS_FAIL,
  error
});

export const updateTournamentNameSuccess = (
  tournament: ITournament
): IUpdateTournamentNameSuccess => ({
  type: UPDATE_TOURNAMENT_NAME_SUCCESS,
  tournament
});

export const deleteTournamentSuccess = (
  id: string
): IDeleteTournamentSuccess => ({
  type: DELETE_TOURNAMENT_SUCCESS,
  tournamentId: id
});

export const getTournamentsAction: AppThunk = async (dispath, _) => {
  dispath(getTournamentsStart);
  try {
    const tournaments = await getTournaments();
    dispath(getTournamentSuccess(tournaments));
  } catch (error) {
    dispath(getTournamentsFail(TournamentFetchError));
  }
};

export const updateTournamentNameAction = (
  tournamentId: string,
  name: string
): AppThunk => async dispatch => {
  const updatedTournamet = await updateTournamentName(tournamentId, name);
  dispatch(updateTournamentNameSuccess(updatedTournamet));
};

export const deleteTournamentAction = (
  id: string
): AppThunk => async dispatch => {
  deleteTournament(id);
  dispatch(deleteTournamentSuccess(id));
};
