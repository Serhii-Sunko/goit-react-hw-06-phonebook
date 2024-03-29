import ContactItemStyled from './ContactItemStyled';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItemStyled>
      <span>
        {name}:{number}
      </span>
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
