import { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Label, Input, Button, ButtonList, ButtonListItem } from "components/Forms/Forms.styled";

export default function EditForm({ contactEdit, onSaveEdit, toggleModal }) {
  const [name, setName] = useState(contactEdit.name);
  const [number, setNumber] = useState(contactEdit.number);

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSaveEdit(contactEdit.id, name, number);
  };

  const onHandleCancel = () => {
    toggleModal();
  }

  return (
    <Form>
      <Label htmlFor="name">Name</Label>
      <Input type="text"
              name="name"
              value={name}
              onChange={handleInput}>
      </Input>    
  
      <Label htmlFor="number">Phone number</Label>
      <Input type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              onChange={handleInput}>
      </Input>
      
      <ButtonList>
        <ButtonListItem><Button type="submit" onClick={onHandleSubmit}>Save Changes</Button></ButtonListItem>

        <ButtonListItem><Button type="button" data-action="cancel" onClick={onHandleCancel}>Cancel</Button></ButtonListItem>
      </ButtonList>
          </Form>
  )
}

EditForm.propTypes = {
  contactEdit: PropTypes.object.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}