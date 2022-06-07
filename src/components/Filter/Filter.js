import s from './Filter.module.css'

const Filter = () => {

    return (
        <div>
            <label className={s.label}>
            Find contacts by name
            <input
              type="text"
              name="filterInput"
              className={s.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //   onChange={this.onFind}
              required
            />
            </label>
            </div>
    )

}
export default Filter;