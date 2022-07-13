import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTournamentAction } from '../actions';
import { createTournament, createTournamentPrompt } from '../constants';
import theme from '../theme';
import Button from './Button';
import { Searchbar } from './Searchbar';

const { spacing } = theme;

const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing(3)};
`;

export const Actionbar = () => {
  const dispatch = useDispatch();

  const onCreateTorunament = () => {
    const newTournamentName = prompt(createTournamentPrompt);
    if (newTournamentName) {
      dispatch(createTournamentAction(newTournamentName));
    }
  };

  return (
    <ActionBarContainer>
      <Searchbar />
      <Button onClick={onCreateTorunament}>{createTournament}</Button>
    </ActionBarContainer>
  );
};
