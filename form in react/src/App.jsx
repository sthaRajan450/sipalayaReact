import React, { useState } from "react";

const App = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState([]);
  const [about, setAbout] = useState("");
  const [resume, setResume] = useState(null);
  const [choice, setChoice] = useState("");
  const [url, setUrl] = useState("");

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject((prev) =>
      prev.includes(value) ? prev.filter((subj) => subj !== value) : [...prev, value]
    );
  };

  const handleReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setContact("");
    setGender("");
    setSubject([]);
    setAbout("");
    setResume(null);
    setChoice("");
    setUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !contact || !gender || !about || !choice) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log({
      fname,
      lname,
      email,
      contact,
      gender,
      subject,
      about,
      resume: resume ? resume.name : "No file selected",
      url,
      choice,
    });

    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">React Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>First Name*</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter First Name"
              required
            />
          </div>

          <div>
            <label>Last Name*</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div>
            <label>Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter Email"
              required
            />
          </div>

          <div>
            <label>Contact*</label>
            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter Contact Number"
              required
            />
          </div>

          <div>
            <label>Gender*</label>
            <div className="space-x-4">
              {["male", "female", "other"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Best Subjects</label>
            <div className="space-x-4">
              {["English", "Maths", "Physics"].map((subj) => (
                <label key={subj}>
                  <input
                    type="checkbox"
                    value={subj}
                    checked={subject.includes(subj)}
                    onChange={handleSubjectChange}
                  />{" "}
                  {subj}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Upload Resume</label>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              className="w-full"
            />
            {resume && (
              <p className="text-sm text-gray-600 mt-1">Selected: {resume.name}</p>
            )}
          </div>

          <div>
            <label>Portfolio URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label>Preferred Role*</label>
            <select
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select Your Role</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
            </select>
          </div>

          <div>
            <label>About You*</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Tell us something about yourself"
              required
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
