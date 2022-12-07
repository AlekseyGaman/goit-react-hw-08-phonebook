// import PropTypes from 'prop-types';
import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactListUl, ContactLi } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactLi key={id}>
            <p>{name}:</p>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Remove
            </button>
          </ContactLi>
        );
      })}
    </ContactListUl>
  );
}

export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
