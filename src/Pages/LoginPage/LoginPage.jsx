import PropTypes from "prop-types";
import LoginForm from "components/Forms/LoginForm/LoginForm";

export default function LoginPage({onLoginUsr}) {
  return (
    <>
      <h2>Authorization</h2>
      <LoginForm onLoginUsr={onLoginUsr}/>
    </>
  )
}    

LoginPage.propTypes = {
  onLoginUsr: PropTypes.func.isRequired,
}