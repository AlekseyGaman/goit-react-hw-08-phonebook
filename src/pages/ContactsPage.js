import ContactList from 'components/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import Filter from '../components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsForm />
      <Filter />
      {items.length > 0 ? (
        <ContactList
        // contacts={getFilterContsacts()}
        />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </>
  );
};

export default ContactsPage;
