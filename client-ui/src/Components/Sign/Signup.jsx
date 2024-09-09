import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    username: "",
    phoneNo: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/signup", user);
      navigate("/signin")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="-mt-8 grow flex items-center justify-around min-h-screen">
      <div className="">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto text-center">
          <h2 className="text-primary font-bold text-2xl">SIGN UP</h2>
          <input
            required
            type="text"
            onChange={handleChange}
            value={user.fullname}
            placeholder="Full name"
            name="fullname"
            className="input-box"
          />
          <input
            required
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            placeholder="youremail@email.com"
            className="input-box"
          />
          <input
            required
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={user.username}
            name="username"
            className="input-box"
          />
          <input
            type="text" // Changed from number to text
            name="phoneNo"
            onChange={handleChange}
            value={user.phoneNo}
            placeholder="Phone number"
            className="input-box"
          />
          <input
            required
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Password"
            className="input-box"
          />
          {err && <p className="text-red-600 py-3 underline">{err}</p>}
          <button type="submit" className="primary">
            Sign Up
          </button>
          <div className="py-2 text-gray-500 text-sm">
            Already have an account?
            <Link to={"/signin"} className="text-blue-600">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
