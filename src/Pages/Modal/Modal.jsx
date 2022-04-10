import PropTypes from 'prop-types';
import { Overlay, Modal } from "./Modal.styled";
import EditForm from "components/Forms/EditForm/EditForm";

export default function ModalWindow({contactEdit, onSaveEdit, toggleModal}) {

  const closeModal = (e) => {
    if (e.target.tagName === "DIV") {
      toggleModal();
    }
  }

  return (
    <Overlay onClick={closeModal}>
      <Modal>
        <EditForm contactEdit={contactEdit} onSaveEdit={onSaveEdit} toggleModal={toggleModal} />
      </Modal>
    </Overlay>
  );
}

ModalWindow.propTypes = {
  contactEdit: PropTypes.object.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}