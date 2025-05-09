import React, { useState } from "react";
import { UserProvider } from "./context/userContext";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

const App = () => {
  const [user, setUser] = useState({ name: "Rajan", age:20 ,address:"Palpa"});

  return (
    <div>
      <UserProvider value={{ user, setUser }}>
        <Box1 />
        <Box2 />
      </UserProvider>
    </div>
  );
};

export default App;
