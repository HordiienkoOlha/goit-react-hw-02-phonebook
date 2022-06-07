import { Component } from 'react';
// import ContactForm from './ContactForm';
import s from './App.module.css'

class App extends Component {
  state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
  };

    // Проп, який передається формі для виклику під час сабміту
    // this.props.onSubmit({ ...this.state });
  onChange = (event) => {
    console.log(this.setState)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    const { name, number } = this.state;
    // console.log(this.state)
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <div className={s.form}>
          <form onSubmit={this.onSubmit}>
            <div className={s.row}>
              <label className={s.label}>
              Name
                <input
                  value={name}
                  type="text"
                  name="name"
                  className={s.input}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={this.onChange}
                />
              </label>
              <label className={s.label}>
              Number
              <input
                value={number}
                  type="tel"
                    name="number"
                    className={s.input}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.onChange}
                />
              </label>
            </div>
        <button type="submit">Add contact</button>
        
          </form>
          </div>
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