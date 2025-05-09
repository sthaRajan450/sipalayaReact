import React from "react";

const ChildComponent = React.memo(({ buttonName, handleClick }) => {
  console.log("child component got re-rendered");
  return (
    <div>
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
});
export default ChildComponent;
