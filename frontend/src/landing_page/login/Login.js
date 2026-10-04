import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data.message);

     if (res.data.success === false) {
       alert(res.data.message);
     } else if (res.data.success === true) {
      console.log("TOKEN:", res.data.token);
       localStorage.setItem("token", res.data.token);

       window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}?token=${res.data.token}`;
     } else {
        alert(res.data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="container w-50">
      <form className="m-lg-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Email address</label>

          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />

          <div className="form-text">
            We'll never share your email with anyone else.
          </div>

          <div className="invalid-feedback">
            Enter email!
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Phone Number</label>

          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            placeholder="(+91)"
            onChange={handleInput}
          />

          <div className="invalid-feedback">
            Enter mobile number!
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>

          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </div>

        <button className="btn btn-primary mb-4">
          Login
        </button>

        <br />
        <br />

        <p>
          Create new account?{" "}
          <Link to="/signup">SignUp</Link>
        </p>

        <br />
        <br />
      </form>
    </div>
  );
}

export default Login;