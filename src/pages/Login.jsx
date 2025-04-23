import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" class="btn">
            Login
          </button>
          <div class="register-link">
            <p>
              Dont have an account?{" "}
              <a onClick={() => navigate("/register")}>Register</a>
            </p>
            <br />
          </div>
        </form>
      </div>
      <button className="btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </>
  );
};

export default Login;
