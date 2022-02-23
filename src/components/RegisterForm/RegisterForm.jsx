export default function RegisterForm() {
  return (
    <form>
      <label htmlFor="login">Login</label>
      <input type="text" name="login" placeholder="Enter login" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" placeholder="Enter password" />
    
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="text" name="confirmPassword" placeholder="Confirm password" />

      <button type="button">Sign Up</button>
  </form>
  )
};
