import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
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

    console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      if (res.data.success === true) {
        alert("Signup successful! Please login.");
        window.location.href = "https://zerodha-vishal.netlify.app/login";
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
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
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>

          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleInput}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mb-4">
          Sign Up
        </button>

        <br />
        <br />

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <br />
        <br />
      </form>
    </div>
  );
}

export default Signup;