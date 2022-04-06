import PropTypes from "prop-types";
import RegisterForm from "components/Forms/RegisterForm/RegisterForm";
export default function RegisterPage({onRegisterUsr}) {
  
  return (
    <>
      <h2>Registration</h2>
      <RegisterForm onRegisterUsr={onRegisterUsr}/>
    </>)
};

RegisterPage.propTypes = {
  onRegisterUsr: PropTypes.func.isRequired,
}
