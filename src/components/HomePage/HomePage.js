import ContactList from 'components/ContactList';
import { useSelector } from 'react-redux';

import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import { getContacts } from '../../redux/contactsSlice';

const HomePage = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <ContactsForm />
      <Filter />
      {contacts.length > 0 ? (
        <ContactList
        // contacts={getFilterContsacts()}
        />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </>
  );
};

export default HomePage;
