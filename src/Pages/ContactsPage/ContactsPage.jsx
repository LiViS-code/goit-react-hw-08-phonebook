import { ContactsTitle, Message } from "./ContactsPage.styled";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import Filter from '../../components/Filter/Filter';




export default function ContactsPage(loading, onChangeState, onContactsGroup, onContactsFilter, onFilter, filter, contacts, onDelete) {
  return (
    <>
  <ContactForm onChangeState={onChangeState} />
  {loading ? (
    <Loader />
  ) : (
    <>
      {onContactsGroup ? (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          {onContactsFilter && (
            <Filter onFilter={onFilter} filter={filter} />
          )}
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={onDelete}
          />
        </>
      ) : (
        <Message>You have no saved contacts</Message>
      )}
    </>
  )}
</>
  )
};
