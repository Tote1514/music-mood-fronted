import "../styles/login.css";


export default function Login() {
  return (
    <div className="login-container">
      <h1>Faça Login</h1>
      <form className="login-form">
        <div className="input-container">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="input-container">
          <label className="password-label">Senha: <small><a href="#">Esqueceu a senha?</a></small></label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}