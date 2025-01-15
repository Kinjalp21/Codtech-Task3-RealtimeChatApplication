import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useState } from "react";

const App = () => {

const [user, setUser] = useState(false);

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail setUser={setUser}/>
        </>
      ) : (
        <Login setUser={setUser}/>
      )}
      <Notification />
    </div>
  );
};

export default App

