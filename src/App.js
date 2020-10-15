import React from "react";
import "./App.css";
import Header from "./Header/Header";

import SideBar from "./SideBar/SideBar";
import Feeds from "./Feeds/Feeds";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";
import { useStateValue } from "./reducer/StateContextProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header user={user} />
          <div className="app__body">
            <SideBar user={user} />
            <Feeds user={user} />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
