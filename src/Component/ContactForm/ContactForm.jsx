import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/Contacts/contacts-operations';
import { getfilteredContacts } from '../../redux/Contacts/contacts-selectors';

import PropTypes from 'prop-types';
import ButtonForm from './ButtonForm';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const Contactform = ({ onSubmitForm, items }) => {
  const labelInputIdName = uuidv4();
  const labelInputIdNumber = uuidv4();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    const contact = { name: name, number: number };
    e.preventDefault();

    const isOridginal = items.some(
      item => item.name === contact.name,
    );
    if (isOridginal) {
      alert(`${contact.name} is already in contacts`);
      resetForm();
      return;
    }
    onSubmitForm(contact);

    resetForm();
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label
        className={styles.label}
        htmlFor={labelInputIdName}
      >
        Name
      </label>
      <input
        className={styles.input}
        id={labelInputIdName}
        type="text"
        name="name"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      ></input>
      <label
        className={styles.label}
        htmlFor={labelInputIdNumber}
      >
        Number
      </label>
      <input
        className={styles.input}
        id={labelInputIdNumber}
        type="tel"
        name="number"
        required
        placeholder="Enter you number"
        value={number}
        onChange={handleChange}
      ></input>
      <ButtonForm />
    </form>
  );
};

Contactform.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getfilteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contactform);
