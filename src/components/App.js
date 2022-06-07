import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data)
  }

  render() {
    // console.log(this.state);
    const { contacts } = this.state;
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <ContactList contacts={contacts} />
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
