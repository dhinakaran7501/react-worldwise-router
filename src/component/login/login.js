import Navbar from "../navbar/navbar";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="row2">
        <div className="Login-sec">
          <div className="email-sec">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue="Dheena"
              placeholder="Enter Your Username..."
            />
          </div>
          <div className="email-sec">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue="dheena123@gmail.com"
              placeholder="Enter Your Email id..."
            />
          </div>
          <div className="password-sec">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue="dheena2612"
              placeholder="Enter Your Password..."
            />
          </div>
          <div className="login-btn-sec">
            <Link to="/nestedroute">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
