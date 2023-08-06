import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsActions';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { v4 as uuid } from 'uuid';
import FilterStyled from './FilterStyled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  const filterId = uuid();
  return (
    <FilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange={onChange}
        name="filter"
      />
    </FilterStyled>
  );
};

export default Filter;
