import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = dataContact => {
    this.state.contacts.some(({ name }) => name === dataContact.name)
      ? Notify.failure(`Contact ${dataContact.name} already exists`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, dataContact],
        }));
  };

  getFilterValue = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const newFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(newFilter) ||
        contact.number.includes(newFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { formSubmitHandler, getFilterValue, deleteContact } = this;
    const { filter } = this.state;
    const filterContacts = this.filteredContacts();
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} changeFilter={getFilterValue} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
// <div>
// <h1>Phonebook</h1>
//  <ContactForm ... />

//  <h2>Contacts</h2>
// <Filter ... />
// <ContactList ... />
//</div>
