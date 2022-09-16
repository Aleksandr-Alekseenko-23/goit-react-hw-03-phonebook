import React from 'react';
import { InputPhoneBook, LabelPhoneBook } from './FilterContact.styled.js';
import PropTypes from 'prop-types';

function FilterContact({ onChangeFilter, filter }) {
  return (
    <div>
      <LabelPhoneBook>
        Find contacts by name
        <InputPhoneBook
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={onChangeFilter}
          placeholder="Name"
        />
      </LabelPhoneBook>
    </div>
  );
}

export default FilterContact;

FilterContact.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
