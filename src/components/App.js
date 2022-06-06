import { Component } from 'react';
import ContactForm from './ContactForm';
import s from './App.module.css'

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

    // handleSubmit = evt => {
    // evt.preventDefault();
    // console.log(`Signed`);

    // Проп, який передається формі для виклику під час сабміту
    // this.props.onSubmit({ ...this.state });
  // };

  render() {
    //  const { name} = this.state;
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
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
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Name
        // <input
        //   type="text"
        //       name="name"
        //       value={name}
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //   required
        //     />
        //   </label>
        //   <button type="submit">Add contact</button>
        //   </form>