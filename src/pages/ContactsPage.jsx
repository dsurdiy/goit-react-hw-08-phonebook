import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/filterSlice';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const formSubmitHandler = newContact => {
    const normalizedNewContactsName = newContact.name.toLowerCase();
    const existingСontact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewContactsName
    );

    if (existingСontact) {
      return toast.warn(`${newContact.name} is already in contacts`);
    }

    try {
      dispatch(contactsOperations.addContact(newContact));
      toast.success(`${newContact.name} successfully added :)`);
    } catch (error) {
      toast.error('Something went wrong :(');
    }
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(changeFilter(newFilter));
  };

  const isContacts = getFilteredContacts().length !== 0;

  return (
    <>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <ContactList contacts={getFilteredContacts()} />

      {/* {isLoading ? (
        <FallingLines
          color="#ff7043"
          width="150"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      ) : (
        <ContactList contacts={getFilteredContacts()} />
      )} */}
      {!isContacts && <b>There are no contacts...</b>}
    </>
  );
};

export default ContactsPage;
