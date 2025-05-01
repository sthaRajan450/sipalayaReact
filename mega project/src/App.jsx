import React from "react";
import config from "./config/config";

const App = () => {
  console.log(config.appwriteUrl)
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="bg-red-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
        odio ullam illum exercitationem nobis reiciendis minus repellendus
        voluptatum atque, reprehenderit architecto consequuntur voluptas quis,
        hic saepe sit voluptate! Possimus, placeat.
      </h1>
    </div>
  );
};

export default App;
