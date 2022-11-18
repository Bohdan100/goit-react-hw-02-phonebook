import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './Phonebook.styled';

const ContactsItem = ({ id, name, number }, onDeleteContact) => (
  <ContactsListItem key={id}>
    <ContactsListText>
      {name}: {number}
    </ContactsListText>

    <ContactsButtonDelete type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </ContactsButtonDelete>
  </ContactsListItem>
);

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    optionalProperty: PropTypes.number,
    requiredProperty: PropTypes.string,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
