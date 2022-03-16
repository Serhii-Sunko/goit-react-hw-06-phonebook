import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistContactsConfig, contactsReducer),
});

export default rootReducer;
