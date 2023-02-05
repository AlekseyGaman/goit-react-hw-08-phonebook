import ContactList from 'components/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import Filter from '../components/Filter/Filter';
import { ContactsContainer } from './Pages.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      <ContactsForm />
      <Filter />
      {items.length > 0 ? (
        <ContactList
        // contacts={getFilterContsacts()}
        />
      ) : (
        <p className="listEmpty">Contact list is empty.</p>
      )}
    </ContactsContainer>
  );
};

export default ContactsPage;
