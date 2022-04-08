import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authSelectors from "redux/authSelector";

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  return (
    <>
      {!isLoggedIn ? <>
        <h2>Welcome</h2>
        <p>Create your phone book of contacts</p>
        <p><Link to={"/register"}>Register</Link> (for new users) or <Link to={"/login"}>login</Link> to get access to your contacts.</p>
      </> : <>
        <h2>Welcome, {userName}</h2>
        <p>To work with the phone book, go to the <Link to={"/contacts"}>contacts</Link> section.</p>
      </>}
    </>
  )
};
