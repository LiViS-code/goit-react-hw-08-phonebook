import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import { Header, Footer, Main, Title, Logo, Container } from "./Layout.styled";
import phonebook from 'img/phonebook.png';

export default function Layout() {
  return (
    <Container>
      <Header>
        <Title>
          <Logo src={phonebook} alt="fonebook" width="50px" />
          Phonebook
        </Title>
        <Navigation />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. February 2022.
      </Footer>
    </Container>
  );
}