import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="-mt-8 grow flex items-center justify-around min-h-screen">
      <div className="">
        <form action="" className="max-w-sm mx-auto text-center">
          <h2 className="text-primary font-bold text-2xl">SIGN UP</h2>
          <input type="text" placeholder="Full name" className="input-box" />
          <input
            type="email"
            placeholder="youremail@email.com"
            className="input-box"
          />
          <input type="text" placeholder="username" className="input-box" />
          <input
            type="number"
            placeholder="phonenumber"
            className="input-box"
          />
          <input type="password" placeholder="password" className="input-box" />
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
