import React from 'react';
import PropTypes from 'prop-types';

import { ContactsList } from './Phonebook.styled';
import ContactsItem from './ContactsItem';

const Contacts = ({ filteredContacts, onDeleteContact }) => (
  <ContactsList>
    {filteredContacts.map(({ id, name, number }) => (
      <ContactsItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ContactsList>
);

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
