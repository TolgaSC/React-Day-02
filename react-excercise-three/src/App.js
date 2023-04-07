import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, firstUpdate] = useState("");
  const [lastName, lastUpdate] = useState("");
  const [email, emailUpdate] = useState("");

  return (
    <div className="App">
      <section className="live-preview">
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => {
            firstUpdate(e.target.value);
          }}
          id="firstname"
          placeholder="Firstname"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => {
            lastUpdate(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            emailUpdate(e.target.value);
          }}
        />
        <div className="div-container">
          <p>Vorname: {firstName}</p>
          <p>Nachname: {lastName}</p>
          <p>Email: {email}</p>
        </div>
      </section>
    </div>
  );
};

export default App;
