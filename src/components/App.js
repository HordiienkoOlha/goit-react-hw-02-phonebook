import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './App.module.css';

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  formSubmitHandler = data => {
    console.log(data)
    const contactId =  nanoid();
    this.state.contacts.push({id: contactId, name: data.name, number: data.number})
    console.log(this.state.contacts);
  }

  render() {
    // console.log(this.state.contacts);
    const { contacts } = this.state;
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
        <Filter />

        
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
