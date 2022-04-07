import { useDispatch, useSelector } from "react-redux";
import { Nav, NavigationLink, NavList, ListItem, WelcomeUser } from "./Navigation.styled";
import { Button } from "components/Forms/Forms.styled";
import authSelectors from "redux/authSelector";
import { logOutThunk } from "redux/asyncThunks";

export default function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const logOutUsr = () => {
    dispatch(logOutThunk());
  }
  return (
    <Nav>
      <NavList>
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>

        {!isLoggedIn ?
          <>
          <ListItem>
            <NavigationLink to="/login">Login</NavigationLink>
          </ListItem>

          <ListItem>
            <NavigationLink to="/register">Register</NavigationLink>
          </ListItem>
        </>
        :
        <>
          <ListItem>
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          </ListItem>

          <ListItem>
            <WelcomeUser>Welcome, {userName} </WelcomeUser><Button onClick={logOutUsr}>Log Out</Button>
          </ListItem>
        </>
        }
      </NavList>
    </Nav>
  );
}