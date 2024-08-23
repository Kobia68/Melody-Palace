import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Component imports
import { SignIn } from "./Components/Sign/SignIn";
import { SignUp } from "./Components/Sign/SignUp";
import { Layout } from "./Components/Layout";
import { Indexpage } from "./Components/IndexPage/Indexpage";
import { Profile } from "./Components/User/Profile";
import { MyTickets } from "./Components/User/MyTickets";
import { MyFavourite } from "./Components/User/MyFavourite";
import { ProfileLayout } from "./Components/User/ProfileLayout";
import { EventDetails } from "./Components/IndexPage/EventDetails";
import { AdminProfileLayout } from "./Components/AdminPages/AdminProfileLayout";
import { NewEvent } from "./Components/AdminPages/NewEvent";
import { Finances } from "./Components/AdminPages/Finances";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/adminprofile" element={<AdminProfileLayout />}>
          <Route index element={<NewEvent />}/>
          <Route path="finances" element={<Finances />}/>
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
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
