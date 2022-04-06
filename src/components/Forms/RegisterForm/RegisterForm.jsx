import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "../Forms.styled";

export default function RegisterForm({onRegisterUsr}) {
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "eMail":
        setEMail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUsr(name, eMail, password);
    clearForm();
  }

  const clearForm = () => {
    setName("");
    setEMail("");
    setPassword("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" value={name} placeholder="Enter your Name" required onChange={handleInput}/>

      <Label htmlFor="eMail">E-Mail</Label>
      <Input type="email" name="eMail" value={eMail} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" placeholder="Enter your E-Mail" required onChange={handleInput}/>
    
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" value={password} placeholder="Think of a password" required onChange={handleInput}/>

      <Button type="submit" disabled = {!name || !eMail || !password}>Sign Up</Button>
  </Form>
  )
};

RegisterForm.propTypes = {
  onRegisterUsr: PropTypes.func.isRequired,
}