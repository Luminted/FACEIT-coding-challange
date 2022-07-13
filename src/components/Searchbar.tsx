import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTournamentsAction } from '../actions';
import Input from './Input';
import { searchbarPlaceholder } from '../constants';

export const Searchbar = () => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;

    setSearchInput(value);
  };

  const onSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === 'Enter') {
      dispatch(getTournamentsAction(searchInput));
    }
  };

  return (
    <Input
      placeholder={searchbarPlaceholder}
      value={searchInput}
      onChange={onChange}
      onKeyPress={onSearch}
    />
  );
};
