import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';
import FilterStyled from './FilterStyled';
import { nanoid } from '@reduxjs/toolkit';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  const filterId = nanoid();
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
