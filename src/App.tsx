import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentsAction } from './actions';
import styled from 'styled-components';
import Container from './components/Container';
import H4 from './components/H4';
import { StatusFeedback } from './components/StatusFeedback';
import Tournament from './components/Tournament';
import { selectTournaments } from './selectors';
import { Searchbar } from './components/Searchbar';
import theme from './theme';

const { spacing } = theme;

const TournamentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing(3)};
`;

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { tournaments } = useSelector(selectTournaments);

  useEffect(() => {
    dispatch(getTournamentsAction());
  }, []);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <ActionBar>
        <Searchbar />
      </ActionBar>
      <StatusFeedback />
      {tournaments.length > 0 && (
        <TournamentGrid>
          {tournaments.map(tournament => (
            <Tournament key={tournament.id} {...tournament} />
          ))}
        </TournamentGrid>
      )}
    </Container>
  );
};
