import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "../Forms.styled";

export default function LoginForm({onLoginUsr}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "login":
        setLogin(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginUsr(login, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="login">Name</Label>
      <Input type="text" name="login" value={login} placeholder="Enter login" required onChange={handleInput}/>
      
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" value={password} placeholder="Enter password" required onChange={handleInput}/>

      <Button type="submit">Log In</Button>
    </Form>
  )
};

LoginForm.propTypes = {
  onLoginUsr: PropTypes.func.isRequired,
}