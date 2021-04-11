import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/Contacts/contacts-operations';
import { getLoading } from '../redux/Contacts/contacts-selectors';
import Container from '../Component/Container';
import ContactList from '../Component/ContactsList';
import Filter from '../Component/Filter';
import ContactForm from '../Component/ContactForm';

import Loader from 'react-loader-spinner';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Loader
          type="Puff"
          color="#000"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

export default ContactsView;
