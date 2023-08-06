const getFilter = state => state.contacts.filter;
const getItems = state => state.contacts.items;

const getFilteredItems = state =>
  getItems(state).filter(({ name }) =>
    name.toLowerCase().includes(getFilter(state))
  );

export { getFilter, getItems, getFilteredItems };
