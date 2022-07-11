import { getTournaments } from '../api';
import { AppThunk } from '../store';
import { ITournament } from '../typings';
import { TournamentFetchError } from '../constants/messages';
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

export const GET_TOURNAMENTS_START = 'GET_TOURNAMENTS_START';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const GET_TOURNAMENTS_FAIL = 'GET_TOURNAMENTS_FAIL';

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

export const getTournamentsAction: AppThunk = async (dispath, _) => {
  dispath(getTournamentsStart);
  try {
    const tournaments = await getTournaments();
    dispath(getTournamentSuccess(tournaments));
  } catch (error) {
    dispath(getTournamentsFail(TournamentFetchError));
  }
};
