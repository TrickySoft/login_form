import "./styles.css";

export default function App() {
  return (
    <section>
      <div className="wrapper">
        <form action="#">
          <h2>Login Form</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-remember">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
