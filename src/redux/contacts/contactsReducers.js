import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { addContact, changeFilter, deleteContact } from './contactsActions';

const itemsReducer = createReducer([], {
  [addContact]: (items, { payload }) => {
    const id = uuid();
    const { name } = payload;

    if (items.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    return [...items, { id, ...payload }];
  },

  [deleteContact]: (items, { payload }) => [
    ...items.filter(item => item.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
