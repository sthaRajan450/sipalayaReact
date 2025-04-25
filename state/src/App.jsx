import React from "react";
import Places from "./Places";
import "./App.css";
import Persons from "./Persons";
const places = [
  {
    img: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
    h1: "Lake",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quo ex mollitia perspiciatis cumque vero reiciendis. Ad pariatur quas placeat magnam nemo earum, distinctio quo ex sit asperiores accusantium?",
  },
  {
    img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
    h1: "Butterflies",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quo ex mollitia perspiciatis cumque vero reiciendis. Ad pariatur quas placeat magnam nemo earum, distinctio quo ex sit asperiores accusantium?",
  },
  {
    img: "https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg?auto=compress&cs=tinysrgb&w=600",
    h1: "Railway Track",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quo ex mollitia perspiciatis cumque vero reiciendis. Ad pariatur quas placeat magnam nemo earum, distinctio quo ex sit asperiores accusantium?",
  },
  {
    img: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
    h1: "Lake",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus quo ex mollitia perspiciatis cumque vero reiciendis. Ad pariatur quas placeat magnam nemo earum, distinctio quo ex sit asperiores accusantium?",
  },
  
];

const persons=[
  {
    name:'John',
    age:23,
    img:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name:'John',
    age:23,
    img:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name:'Nisha',
    age:23,
    img:"https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
]

const App = () => {
  return (
    <div className="container">
      {/* <div className="places">
        {places.map((place, idx) => (
          <Places key={idx} place={place} />
        ))}
      </div> */}
      <div className="persons">
        {persons.map((person,idx)=>(
          <Persons key={idx} person={person}/>
        ))}
      </div>
    </div>
  );
};

export default App;
