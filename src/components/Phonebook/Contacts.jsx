import React from 'react';
import PropTypes from 'prop-types';

import { ContactsList } from './Phonebook.styled';
import ContactsItem from './ContactsItem';

const Contacts = ({ filteredContacts, onDeleteContact }) => (
  <ContactsList>
    {filteredContacts.map(contact => ContactsItem(contact, onDeleteContact))}
  </ContactsList>
);

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      optionalProperty: PropTypes.number,
      requiredProperty: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
