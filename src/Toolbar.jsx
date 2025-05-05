import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useImmer } from "use-immer";

// function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }
const Toolbar = () => {
  const [count, setCount] = useState(0);

  //   const [player, updatePlayer] = useImmer({
  //     name: "Rajan",
  //     stats: {
  //       score: 0,
  //       level: 1,
  //     },
  //   });

  //   variation 1
  //   useEffect(() => {
  //    alert('i run on each render')
  //   })

  //variation 2
  //   useEffect(() => {
  //     alert("i run on only first render");
  //   }, []);

  //   variation 3
  useEffect(() => {
    alert("i run on every time when dependency is updated");
  }, [count]);

  return (
    <div>
      {/* <AlertButton message="playing movie">Play Movie</AlertButton>
      <AlertButton message="uploading movie">upload Movie</AlertButton>
      <AlertButton>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          molestias ab animi, minima quisquam sit voluptatem soluta vel.
          Doloremque cupiditate earum placeat. Deleniti ut, repellat est harum
          maiores qui ducimus!
        </p>
      </AlertButton> */}

      <Button text="add" onClick={() => setCount(count + 1)}>
        add
      </Button>
      <h1>{count}</h1>
      <Button text="sub" onClick={() => setCount(count - 1)}>
        sub
      </Button>
    </div>
  );
};

export default Toolbar;
