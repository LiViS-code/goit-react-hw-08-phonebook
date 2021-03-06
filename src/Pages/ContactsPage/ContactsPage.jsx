import { useEffect, useState } from "react";
import { ContactsTitle, Message } from "./ContactsPage.styled";
import ContactForm from 'components/Forms/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addNewContact, fetchContacts, deleteContact, editContact } from "redux/asyncThunks";
import toastMsg from "utils/toastMsg";
import { setFilter } from 'redux/slices/contactSlices';
import ModalWindow from "Pages/Modal/Modal";


export default function ContactsPage() {

  const [showModal, setShowModal] = useState("false");
  const [contactEdit, setContactEdit] = useState({});

  const dispatch = useDispatch();

  const { contacts, loading, filter } = useSelector(
    state => state.phonebook,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onContactsGroup = contacts.length !== 0 ? true : false;
  const onContactsFilter = contacts.length >= 2 ? true : false;

  const onChangeState = (name, number) => {
    if (matchCheckName(name, contacts)) {
      toastMsg(name, 'warn');
      return 'not success';
    }

    dispatch(addNewContact({ name, number }));

    toastMsg(name, 'success');

    return 'success';
  };

  const matchCheckName = (name, contacts) => {
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) return true;
    }
    return false;
  };

  const onDelete = (id, name) => {
    dispatch(deleteContact(id));

    toastMsg(name, 'info');

    if (contacts.length <= 2) {
      onFilter('');
    }
  };

  const onFilter = word => {
    dispatch(setFilter(word));
  };

  const onSaveEdit = (id, name, number) => {
    dispatch(editContact({id, name, number}));
    setShowModal(showModal => !showModal);
  }

  const toggleModal = (id=null, name=null, number=null) => {
    setContactEdit({ id, name, number });
    setShowModal(showModal => !showModal);
  }

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
                  toggleModal={toggleModal}
          />
        </>
      ) : (
        <Message>You have no saved contacts</Message>
      )}
    </>
      )}
      {!showModal && <ModalWindow contactEdit={contactEdit} onSaveEdit={onSaveEdit} toggleModal={toggleModal}/> }
</>
  )
};
