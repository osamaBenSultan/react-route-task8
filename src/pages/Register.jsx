import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Register</h1>
          <div class="input-box">
            <input type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="text" placeholder="Email Address" required />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" class="btn">
            Register
          </button>
          <div class="register-link">
            <p>
              Have an account? <a onClick={() => navigate("/login")}>Login</a>
            </p>
          </div>
        </form>
      </div>
      <button className="btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </>
  );
};

export default Register;
