import { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  ContactSpan,
  Form,
  InputBox,
  ContactInput,
  SubmitButton,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const NameChange = event => {
    setName(event.currentTarget.value);
  };

  const NumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handelSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form className="form" onSubmit={handelSubmit}>
      <InputBox>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={NameChange}
        />
        <ContactSpan>Name</ContactSpan>
      </InputBox>
      <InputBox>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={NumberChange}
        />
        <ContactSpan>Number</ContactSpan>
      </InputBox>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;

ContactForm.propType = {
  name: PropTypes.string,
  number: PropTypes.string,
  handelSubmit: PropTypes.func,
};
