import ContactsItem from 'components/ContactsItem';

import { useSelector } from 'react-redux';
//selectors
import {
  selectContacts,
  selectFilteredContacts,
  selectValue,
} from 'redux/selectors';
//styles
import css from '../Form/Form.module.css';

// const filterContacts = (items, value) => {
//   const lowCaseFilter = value.toLowerCase();
//   return items.filter(el => el.name.toLowerCase().includes(lowCaseFilter));
// };

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  // const value = useSelector(selectValue);

  // const filteredContacts = filterContacts(contacts, value);

  return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactsItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   filterContacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
