import React from "react";
import "./Sign.css";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <form action="" className="max-w-sm mx-auto text-center">
          <h2 className="text-primary font-bold text-2xl">SIGN IN</h2>
          <input
            type="email"
            placeholder="youremail@email.com"
            className="input-box"
          />
          <input type="password" placeholder="password" className="input-box" />
          <button className="primary">Sign In</button>
          <div className="py-2 text-gray-500 text-sm">
            Don't have an account yet?
            <Link to={"/signup"} className="text-blue-600"> Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
