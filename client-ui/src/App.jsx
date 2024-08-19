// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import * as ReactDOM from "react-dom";
import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// import {Home} from "./Components/Home/Home";
// import { Signup } from "./Components/Sign/Signup";
import { SignIn } from "./Components/Sign/SignIn";
import { SignUp } from "./Components/Sign/SignUp";
import { Layout } from "./Components/Layout";
import { Indexpage } from "./Components/IndexPage/Indexpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
