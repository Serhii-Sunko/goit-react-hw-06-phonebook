import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredItems } from '../../redux/contacts/contactsSelectorss';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const items = useSelector(getFilteredItems);

  return (
    <ul>
      {items.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};

export default ContactList;
