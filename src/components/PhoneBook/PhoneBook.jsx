import React, { Component } from 'react';
import AddForm from '../AddForm/AddForm';
import Contacs from '../Contacts/Contacs';
import FilterContact from '../FilterContact/FilterContact';

import { TitleOne, Wrapper, WrapperContact } from './PhoneBook.styled.js';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number, id }) => {
    const allcontacs = this.state.contacts;
    const isSameContacs = allcontacs.filter(
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

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContact = this.getVisibleContact();

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
            <Contacs contacts={visibleContact} onDelete={this.deleteContact} />
          </WrapperContact>
        </Wrapper>
      </>
    );
  }
}

export default PhoneBook;
