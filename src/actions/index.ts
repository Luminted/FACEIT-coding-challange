import {
  IGetTournamentFail,
  IGetTournamentSuccess,
  IGetTournamentsStart
} from './tournaments';

export * from './tournaments';
export type Actions =
  | IGetTournamentFail
  | IGetTournamentSuccess
  | IGetTournamentsStart;
