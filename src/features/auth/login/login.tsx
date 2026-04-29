import './login.scss'

const Login = () => {
  return (
    <div className="login-container">
      <form action="/login" method="POST">
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;