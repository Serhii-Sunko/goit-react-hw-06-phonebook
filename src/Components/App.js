import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Container from './Container/Container';

const App = () => {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Container>
      <Container title="Contacts">
        <ContactFilter onChange={onFilterChange} />

        <ContactList onDelete={deleteItem} items={getFilteredContacts()} />
      </Container>
    </>
  );
};
export default App;
