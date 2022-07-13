import {
  IGetTournamentFail,
  IGetTournamentSuccess,
  IGetTournamentsStart,
  IUpdateTournamentNameSuccess,
  IDeleteTournamentSuccess,
  ICreateTournamentSuccess
} from './tournaments';

export * from './tournaments';
export type Actions =
  | IGetTournamentFail
  | IGetTournamentSuccess
  | IGetTournamentsStart
  | IUpdateTournamentNameSuccess
  | IDeleteTournamentSuccess
  | ICreateTournamentSuccess;
