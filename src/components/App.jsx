import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const StorageKey = 'contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(StorageKey)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(StorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${name} is already in the contacts`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilterContsacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <GlobalStyle />
      <div className="formWrapper Wrapper">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={getFilterContsacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p>Contact list is empty.</p>
        )}
      </div>
    </>
  );
}

export default App;
