import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentsAction } from './actions';
import Container from './components/Container';
import H4 from './components/H4';
import { StatusFeedback } from './components/StatusFeedback';
import { selectTournaments } from './selectors';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { tournaments } = useSelector(selectTournaments);

  const fetchTournaments = () => {
    dispatch(getTournamentsAction);
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <StatusFeedback />
    </Container>
  );
};
