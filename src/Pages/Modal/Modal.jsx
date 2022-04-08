import { useState } from "react";
import { Overlay, Modal } from "./Modal.styled";
import { Form, Label, Input, Button } from "components/Forms/Forms.styled";

export default function ModalWindow({contactEdit, onSaveEdit}) {
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

  return (
    <Overlay>
      <Modal>
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
          <Button type="submit" onClick={onHandleSubmit}>Save Changes</Button>    
          </Form>
      </Modal>
    </Overlay>
  );
}