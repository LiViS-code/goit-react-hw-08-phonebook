export default function LoginForm() {
  return (
    <form>
      <label htmlFor="login">Login</label>
      <input type="text" name="Login" placeholder='input login' />
      
      <label htmlFor="password">Password</label>
      <input type="text" name="password" placeholder="input password" />

      <button type="button">Log In</button>
    </form>
  )
};
