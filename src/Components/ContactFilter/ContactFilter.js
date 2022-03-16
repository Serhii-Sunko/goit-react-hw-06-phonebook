import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactActions';
import { getFilter } from '../../redux/contacts/contactsSelectorss';
import ContactFilterStyled from './ContactFilterStyled';
import { v4 as uuid } from 'uuid';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  const filterId = uuid();
  return (
    <ContactFilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={onChange} name="filter" value={filter} />
    </ContactFilterStyled>
  );
};

export default ContactFilter;
