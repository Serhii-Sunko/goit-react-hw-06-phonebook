import { useSelector } from 'react-redux';
import { getFilteredItems } from 'redux/contacts/contactsSelectors';
import ContactItem from './contactItem/ContactItem';

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
