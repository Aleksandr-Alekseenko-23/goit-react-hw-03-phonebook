import React, { Component } from 'react';
import AddForm from '../AddForm/AddForm';
import Contacs from '../Contacts/Contacs';
import FilterContact from '../FilterContact/FilterContact';

import { TitleOne, Wrapper, WrapperContact } from './PhoneBook.styled.js';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts') || '';
    const parsedContacts = contacts && JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  handleSubmit = ({ name, number, id }) => {
    const isSameContacs = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    ).length;
    if (isSameContacs) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, { name, number, id }] };
      });
    }
  };

  onChangeFilter = ({ currentTarget: { value } }) =>
    this.setState({ filter: value });

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <TitleOne>Phonebook</TitleOne>
        <Wrapper>
          <AddForm onSubmit={this.handleSubmit} />
          <WrapperContact>
            <FilterContact
              onChangeFilter={this.onChangeFilter}
              filter={this.state.filter}
            />
            <Contacs
              contacts={this.getVisibleContact()}
              onDelete={this.deleteContact}
            />
          </WrapperContact>
        </Wrapper>
      </>
    );
  }
}

export default PhoneBook;
