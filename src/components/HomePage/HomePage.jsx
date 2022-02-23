import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Create your phone book of contacts</p>
      <p><NavLink to={"/register"}>Register</NavLink> (for new users) or <NavLink to={"/login"}>login</NavLink> to get access to your contacts.</p>
    </>
  )
};
