import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GrContactInfo } from 'react-icons/gr';
import { BiPhone } from 'react-icons/bi';
import { ContactInfo, DeleteBtn } from './Contact.styled';
// import { Spinner } from 'components/Spinner/Spinner';
import contactsOperations from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const handleDeleteContact = id => {
    try {
      dispatch(contactsOperations.deleteContact(id));
      toast.info(`Contact ${name} deleted!`);
    } catch (error) {
      toast.error('Something went wrong :(');
    }
  };

  return (
    <>
      <ContactInfo>
        <span>
          <GrContactInfo />
          {name}
        </span>
        <span>
          <BiPhone />
          {number}
        </span>
      </ContactInfo>
      <DeleteBtn
        type="button"
        disabled={isLoading}
        onClick={() => handleDeleteContact(id)}
      >
        {/* {isLoading ? <Spinner /> : 'Delete'} */}
        Delete
      </DeleteBtn>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
