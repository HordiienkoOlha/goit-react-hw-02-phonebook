import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
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
