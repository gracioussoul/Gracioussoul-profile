import React from 'react';
import './App.css';

const Profile = () => {
  const coder = {
    name: 'Gracioussoul',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    bio:
      "I'm a passionate coder with a love for building web applications. I enjoy working with JavaScript and React to create user-friendly interfaces and interactive experiences. In my free time, I like to contribute to open-source projects and explore new technologies.",
  };

  return (
    <div className="profile">
      <h1>{coder.name}'s Profile</h1>
      <p>
        <strong>Age:</strong> {coder.age}
      </p>
      <h2>Skills:</h2>
      <ul>
        {coder.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Bio:</h2>
      <p>{coder.bio}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;

