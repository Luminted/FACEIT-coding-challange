import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../theme';
import { loading, noTournaments, retry } from '../constants/messages';
import Button from './Button';
import { getTournamentsAction } from '../actions';
import { selectTournaments } from '../selectors';

const {
  spacing,
  typography: { body }
} = theme;

const StatusMessage = styled.text`
    ${body}
    margin-bottom: ${spacing(3)}
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const StatusFeedback: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, error, tournaments } = useSelector(selectTournaments);

  const tournamentListEmpty = !error && !isLoading && tournaments.length === 0;
  const displayStatus = isLoading || error || tournamentListEmpty;

  return displayStatus ? (
    <StatusContainer>
      {isLoading && <StatusMessage>{loading}</StatusMessage>}
      {error && (
        <>
          <StatusMessage>{error}</StatusMessage>
          <Button onClick={() => dispatch(getTournamentsAction)}>
            {retry}
          </Button>
        </>
      )}
      {tournamentListEmpty && <StatusMessage>{noTournaments}</StatusMessage>}
    </StatusContainer>
  ) : null;
};
