import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
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
      await axios.post("http://localhost:5000/signin", user);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="-mt-16 grow flex items-center justify-around min-h-screen">
      <div className="">
        <form
          action=""
          className="max-w-sm mx-auto text-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-primary font-bold text-2xl">SIGN IN</h2>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="email"
            className="input-box"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            className="input-box"
          />
          {err && <p className="text-red-600 py-3">{ err }</p>}
          <button className="primary">Sign In</button>
          <div className="py-2 text-gray-500 text-sm">
            Don't have an account yet?
            <Link to={"/signup"} className="text-blue-600">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
