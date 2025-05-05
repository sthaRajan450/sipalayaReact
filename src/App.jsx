import Box from "./Box";
import Button from "./Button";
import Card from "./Card";
import Item from "./Item";

import Person from "./Person";
import { useState } from "react";
// function Card({ children }) {
//   return <div className="bg-red-300 p-4 rounded-md shadow-md">{children}</div>;
// }
function App() {
  // const people = [
  //   "Creola Katherine Johnson: mathematician",
  //   "Mario José Molina-Pasquel Henríquez: chemist",
  //   "Mohammad Abdus Salam: physicist",
  //   "Percy Lavon Julian: chemist",
  //   "Subrahmanyan Chandrasekhar: astrophysicist",
  // ];

  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  // const [count, setcount] = useState(0);
  // const increment = () => {
  //   setcount(count + 1);
  // };
  // const decrement = () => {
  //   setcount(count - 1);
  // };
  // const buttons = [
  //   { text: "add", handleCount:  increment  },
  //   { text: "sub", handleCount: decrement  },
  // ];
  const [name, setName] = useState("");
  const [loggedin, setLoggedin] = useState(true);
  const [count, setCount] = useState(0);
  console.log(count);

  // console.log(people.filter(person=>person.id==1))

  return (
    <>
      {/* <Button text={loggedin ? "logout" : "login"} /> */}
      {/* <ul>
        {people.map((person) => (
          <li key={person.id}>
            <h1>{person.name}</h1>
            <p>{person.profession}</p>
          </li>
        ))}
      </ul> */}

      <h1>hello</h1>
      <button onClick={()=>alert('you clicked me!')}>click me</button>
    </>
  );

  // return (
  //   <>
  //     <Card title="card-1" name={name} setName={setName} />
  //     <Card title="card-2" name={name} setName={setName} />
  //     <p>i am inside parent component and the value of name is {name}</p>

  //     <Item isPacked={true} name="clothes" />
  //     <Item isPacked={false} name="utensils" />
  //     <Item isPacked={true} name="boots" />

  //     {/* <Card>
  //       <h1>hello </h1>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius,
  //         quisquam beatae, error quidem libero possimus necessitatibus excepturi
  //         ex, neque voluptas fugit laborum laboriosam expedita tempore iste
  //         animi quae harum?
  //       </p>
  //     </Card> */}

  //     {/* {buttons.map((button) => (
  //       <Button key={button.text} text={button.text} handleCount={button.handleCount}>
  //         <h1>{count}</h1>
  //       </Button>
  //     ))} */}

  //     {/* <Box title="Hello" />
  //     <Box title="Rajan" />
  //     <Person
  //       person={{
  //         name: "Rajan",
  //         theme: {
  //           backgroundColor: "black",
  //           color: "white",
  //         },
  //       }}
  //     /> */}
  //   </>
  // );
}

export default App;
