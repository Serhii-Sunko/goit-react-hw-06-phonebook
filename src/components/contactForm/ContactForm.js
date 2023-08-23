import { useState } from 'react';
import ContactFormStyled from './ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contacts/contactsSlice';
import { getItems } from 'redux/contacts/contactsSelectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const id = nanoid();
  const nameId = nanoid();
  const numberId = nanoid();

  const items = useSelector(getItems);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (items.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id, name, number }));
    e.target.reset();
    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyled>
      <form name="contact" onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label htmlFor={numberId}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          id={numberId}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
