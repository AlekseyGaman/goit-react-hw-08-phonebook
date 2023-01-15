// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactListUl, ContactLi } from './ContactList.styled';
import { getContacts, getFilter } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filtredContacts = contactsFilter();

  return (
    <ContactListUl>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <ContactLi key={id}>
            <p>{name}:</p>
            <span>{number}</span>
            <button type="button" onClick={() => deleteSelectedContact(id)}>
              Remove
            </button>
          </ContactLi>
        );
      })}
    </ContactListUl>
  );
}
