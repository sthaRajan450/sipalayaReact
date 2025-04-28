import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [fruit, setFruit] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, image, fruit, gender,languages);
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <br />
        <br />
        <label htmlFor="fruits">Fruits:</label>
        <select id="fruits" onChange={(e) => setFruit(e.target.value)}>
          <option>---Select a Option---</option>
          <option value="apple">Apple</option>
          <option value="banana">Banan</option>
          <option value="grapes">Grapes</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Male:
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </form>
      <label htmlFor="languages">Languages:</label>
      <input
        type="checkbox"
        value="C"
        onChange={(e) => setLanguages((prev) => [...prev, e.target.value])}
      />
      C
      <input
        type="checkbox"
        value="Python"
        onChange={(e) => setLanguages((prev) => [...prev, e.target.value])}
      />
      Python
      <input
        type="checkbox"
        value="javascript"
        onChange={(e) => setLanguages((prev) => [...prev, e.target.value])}
      />
      JavaScript
    </div>
  );
};

export default App;
