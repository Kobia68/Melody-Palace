import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const Navbar = () => {
  const { currentUser, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Redirect based on user role
  const checkRole = () => {
    if (user) {
      const path = user.role === "admin" ? "/adminprofile" : "/profile";
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(role);
    } else {
      const path = user.role === "user" ? "/adminprofile" : "/profile";
      navigate(path);    }
  };

  return (
    <div
      className=" border-b fixed top-0 left-0 right-0 pt-4 bg-white"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <header className="flex justify-around pb-2">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
          className="flex items-center gap-1 focus:outline-none focus:ring-0 focus:ring-offset-0"
        >
          {/* THE LOGO ICON JSX FROM HEROICONS */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold text-primary hidden md:block">
            Melody Palace
          </span>
        </Link>

        <div className="border border-gray-300 rounded-full py-1 px-2 shadow-md shadow-gray-200 hidden md:block">
          {/* INPUT SEARCH BOX */}
          <input
            type="text"
            name="query"
            placeholder="Search..."
            className="focus:outline-none"
          />
          {/* Button for the search icon */}
          <button className="bg-primary text-white p-1 rounded-full focus:outline-none focus:ring-0 focus:ring-offset-0">
            {/* SEARCH ICON FOR THE SEARCH INPUT */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* SIGN IN AND SIGN UP OPTION LINKS */}
        {currentUser ? (
          <div className="flex gap-4">
            <Link
              onClick={signout}
              to="/"
              className="signin-btn flex items-center"
            >
              <button className="border border-gray-300 rounded-full py-1 px-2 gap-2 font-semibold hover:bg-primary transition-colors duration-200 hover:text-white">
                Sign out
              </button>
            </Link>
            <Link
              className="flex border border-gray-300 rounded-full py-1 px-2 gap-2 focus:outline-none focus:ring-0 focus:ring-offset-0"
              onClick={() => {
                checkRole();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="bg-primary text-white rounded-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex gap-3 items-center justify-center">
            <Link to="/signin" className="signin-btn flex items-center">
              <button className="border border-gray-300 rounded-full py-1 px-2 gap-2 font-semibold hover:bg-primary transition-colors duration-200 hover:text-white">
                Sign in
              </button>
            </Link>

            <Link to="/signup" className="signup-btn flex items-center">
              <button className="border border-gray-300 rounded-full py-1 px-2 gap-2 font-semibold hover:bg-primary transition-colors duration-200 hover:text-white">
                Sign up
              </button>
            </Link>
          </div>
        )}

        {/* This Link and Icons will display only if the user is signin */}
      </header>
      <div className="text-sm  items-center justify-center gap-3 my-3 hidden md:block text-center">
        <Link
        to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          All Categories
        </Link>
        <Link
          to="/?cat=concert"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Concerts
        </Link>
        <Link
          to="/?cat=comedy"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Comedy
        </Link>
        <Link
          to="/?cat=art"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Art
        </Link>
        <Link
          to="/?cat=product launch"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Product Launch
        </Link>
        <Link
          to="/?cat=talent show"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Talent Shows
        </Link>
        <Link
          to="/?cat=other"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="category mx-2"
        >
          Other
        </Link>
      </div>
    </div>
  );
};
