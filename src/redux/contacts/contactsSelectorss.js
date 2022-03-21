export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getFilteredItems = state =>
  getItems(state).filter(({ name }) => name.toLowerCase().includes(getFilter(state)));
