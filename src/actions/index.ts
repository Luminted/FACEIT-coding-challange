import {
  IGetTournamentFail,
  IGetTournamentSuccess,
  IGetTournamentsStart,
  IUpdateTournamentNameSuccess,
  IDeleteTournamentSuccess
} from './tournaments';

export * from './tournaments';
export type Actions =
  | IGetTournamentFail
  | IGetTournamentSuccess
  | IGetTournamentsStart
  | IUpdateTournamentNameSuccess
  | IDeleteTournamentSuccess;
