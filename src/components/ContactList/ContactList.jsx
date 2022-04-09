import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FcRemoveImage, FcEditImage } from 'react-icons/fc';
import {
  ContastsList,
  ContactItem,
  ContactNote,
  Link,
  ButtonsList,
  ButtonsItem,
} from './ContactList.styled';
import { Button } from '../Forms/Forms.styled';
export default function ContactList({ contacts, filter, onDelete, toggleModal }) {
  let filterContacts = contacts;

  if (filter) {
    filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  }

  return (
    <ContastsList>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactNote>
            {name}:{' '}
            <Link href={'tel:+' + parseInt(number.replace(/\D+/g, ''))}>
              {number}
            </Link>
          </ContactNote>
          <ButtonsList>
            <ButtonsItem>
              <Button
              type="button"
              onClick={() => toggleModal(id, name, number)}
              title="Edit this contact"
              >
                <IconContext.Provider
                  value={{
                    size: '1.3em',
                    style: { verticalAlign: 'middle' },
                  }}
                >
                  <FcEditImage />
                </IconContext.Provider>
              </Button>
            </ButtonsItem>
            <ButtonsItem>
              <Button
                type="button"
                onClick={() => onDelete(id, name)}
                title="Delete this contact"
                >
                <IconContext.Provider
                  value={{
                    size: '1.3em',
                    style: { verticalAlign: 'middle' },
                  }}
                >
                  <FcRemoveImage />
                </IconContext.Provider>
              </Button>
            </ButtonsItem>
          </ButtonsList>
        </ContactItem>
      ))}
    </ContastsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
