import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const {signin} = useContext(AuthContext)

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
      await signin(user)
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
            name="username"
            onChange={handleChange}
            value={user.username}
            type="text"
            placeholder="username"
            className="input-box"
          />
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handleChange}
            placeholder="password"
            className="input-box"
          />
          {err && <p className="text-red-600 py-3 underline text-sm">{ err }</p>}
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
