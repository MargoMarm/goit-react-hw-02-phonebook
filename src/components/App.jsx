import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { WrapperContent } from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  creatContact = data => {
    const { name, number } = data;
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    if (
      this.state.contacts.find(
        existingContact => existingContact.name === contact.name
      )
    ) {
      Notiflix.Notify.failure(`${contact.name} is already in your contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      Notiflix.Notify.success(
        `${contact.name} has been successfully added to  your phonebook`
      );
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };
  hadleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <WrapperContent>
        <ContactForm creatContact={this.creatContact} />
        <Contacts
          deleteContact={this.deleteContact}
          contacts={this.getFiltredContacts()}
        ></Contacts>
        <Filter
          value={this.state.filter}
          onChange={this.hadleFilterChange}
        ></Filter>
      </WrapperContent>
    );
  }
}
