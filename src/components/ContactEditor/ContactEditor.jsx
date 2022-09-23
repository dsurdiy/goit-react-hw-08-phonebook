import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import contactsOperations from 'redux/contacts/contacts-operations';

export const ContactEditor = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const updatedContact = {
      id,
      name: data.get('name'),
      number: data.get('number'),
    };

    dispatch(contactsOperations.updateContact(updatedContact));
    onClose();
  };

  return (
    <div>
      <p>
        <span>Update contact</span>
        <button type="button" onClick={() => onClose()}>
          <MdClose />
        </button>
      </p>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder={name}
          />
        </label>
        <label>
          Nubmer
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder={number}
          />
        </label>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};
