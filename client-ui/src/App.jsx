// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import * as ReactDOM from "react-dom";
import * as React from "react";
import { useState } from "react";
import "./App.css";

import {Home} from "./Components/Home/Home";
import { Signup } from "./Components/Sign/Signup";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        {/* <Home /> */}
        {/* <Signup /> */}
        <Navbar />
      </div>
    </>
  );
}

export default App;
