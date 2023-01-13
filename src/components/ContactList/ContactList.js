// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactListUl, ContactLi } from './ContactList.styled';
import { getContacts } from '../../redux/store';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => {
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
