// import PropTypes from 'prop-types';
import React from 'react';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}></button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
