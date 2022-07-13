import React from 'react';
import styled from 'styled-components';
import { ITournament } from '../typings';
import theme from '../theme';
import H6 from './H6';
import { dateTimeStringToenGBLocalisedDateTimeString } from '../utils/date';
import Button from './Button';
import {
  deleteLabel,
  edit,
  tournamentDeleteConfirmation,
  tournamentEditPromptTitle
} from '../constants';
import { useDispatch } from 'react-redux';
import { deleteTournamentAction, updateTournamentNameAction } from '../actions';

interface IProps extends ITournament {
  className?: string;
}

const {
  spacing,
  borderRadius,
  palette: {
    background: { base: baseColor }
  },
  typography: { body: bodyTypography }
} = theme;

const MarginedButton = styled(Button)`
  margin-right: ${spacing(2)};
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${spacing(2)};
`;

const Tournament = ({
  id,
  className,
  name,
  organizer,
  game,
  participants: { max, current },
  startDate
}: IProps) => {
  const dispatch = useDispatch();

  const onEdit = () => {
    const newTournamentName = prompt(tournamentEditPromptTitle, name);

    if (newTournamentName !== null && newTournamentName !== name) {
      dispatch(updateTournamentNameAction(id, newTournamentName));
    }
  };

  const onDelete = () => {
    if (window.confirm(tournamentDeleteConfirmation)) {
      dispatch(deleteTournamentAction(id));
    }
  };

  return (
    <div className={className}>
      <H6>{name}</H6>
      <div>Organizer: {organizer}</div>
      <div>Game: {game}</div>
      <div>Participants: {`${current}/${max}`}</div>
      <div>Start: {dateTimeStringToenGBLocalisedDateTimeString(startDate)}</div>
      <ButtonGroupContainer>
        <MarginedButton onClick={onEdit}>{edit}</MarginedButton>
        <Button onClick={onDelete}>{deleteLabel}</Button>
      </ButtonGroupContainer>
    </div>
  );
};

export default styled(Tournament)`
  border-radius: ${borderRadius};
  background-color: ${baseColor};
  padding: ${spacing(4)};
  ${bodyTypography}
`;
