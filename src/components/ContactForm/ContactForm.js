// import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
state = {
  name: '',
  number: ''
    };
    onChange = (event) => {
    
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
    }
    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
    const { name} = this.state;        
        return (
    <form className={s.form} onSubmit={this.onSubmit}>
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
                onChange={this.onChange}
                required
            />
        </label>

                </div>
        <button type="submit">Add contact</button>
        
            </form>
        )
    }
}


export default ContactForm;

// <label className={s.label}>
//     Number
//     <input
//     type="tel"
//      name="number"
//      className={s.input}
//     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//     required
//     />
//         </label>

// <form onSubmit={this.handleSubmit}>
//   <label>
//     Name
// <input
//   type="text"
//       name="name"
//       // value={name}
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
//     />
//   </label>
//   <button type="submit">Add contact</button>
//   </form>
