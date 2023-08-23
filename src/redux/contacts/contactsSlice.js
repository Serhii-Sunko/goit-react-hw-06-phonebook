import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, deleteContact, changeFilter } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
