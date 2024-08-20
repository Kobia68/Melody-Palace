import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Component imports
import { SignIn } from "./Components/Sign/SignIn";
import { SignUp } from "./Components/Sign/SignUp";
import { Layout } from "./Components/Layout";
import { Indexpage } from "./Components/IndexPage/Indexpage";
import { UserPage } from "./Components/User/UserPage";
import { Profile } from "./Components/User/Profile";
import { MyTickets } from "./Components/User/MyTickets";
import { MyFavourite } from "./Components/User/MyFavourite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path="/profile" element={<UserPage />}>
          <Route path="mytickets" element={<MyTickets />} />
          <Route path="favourite" element={<MyFavourite />} />
        </Route>
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
