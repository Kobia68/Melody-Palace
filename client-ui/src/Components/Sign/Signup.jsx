import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    username: "",
    phoneNo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="-mt-8 grow flex items-center justify-around min-h-screen">
      <div className="">
        <form action="" className="max-w-sm mx-auto text-center">
          <h2 className="text-primary font-bold text-2xl">SIGN UP</h2>
          <input
            type="text"
            onChange={handleChange}
            value={user.fullname}
            placeholder="Full name"
            name="fullname"
            className="input-box"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            placeholder="youremail@email.com"
            className="input-box"
          />
          <input
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={user.username}
            name="username"
            className="input-box"
          />
          <input
            type="number"
            name="phoneNo"
            onChange={handleChange}
            value={user.phoneNo}
            placeholder="phonenumber"
            className="input-box"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="password"
            className="input-box"
          />
          <button className="primary">Sign Up</button>
          <div className="py-2 text-gray-500 text-sm">
            Already have an account?
            <Link to={"/signin"} className="text-blue-600">
              {" "}
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
