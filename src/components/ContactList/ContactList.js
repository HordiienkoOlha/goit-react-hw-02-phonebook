
const ContactList = ({ contacts }) => {
    
    console.log(contacts)

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.name} : {contact.number}</p>
                </li>
            ))}
    </ul>
)
}
export default ContactList;

//  className={s.listItem}