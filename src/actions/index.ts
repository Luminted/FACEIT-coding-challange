import {
  IGetTournamentFail,
  IGetTournamentSuccess,
  IGetTournamentsStart,
  IUpdateTournamentNameSuccess
} from './tournaments';

export * from './tournaments';
export type Actions =
  | IGetTournamentFail
  | IGetTournamentSuccess
  | IGetTournamentsStart
  | IUpdateTournamentNameSuccess;
