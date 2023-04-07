import React, { useState } from 'react';
import './App.css';




// TODO: Changing the text if the button is clicked (from Day to Night and also the Background) 
const App = () => {

  let [light, setLight] = useState(true);
  
  return (
    <div className="App" style={{background: light ? "grey" : "black"}}>
      <section style={{ color: light ? "black" : "white", backgroundColor: light ? "lightblue" : "darkblue", border: light ? "solid 1px black" : "solid 1px white"}}>
        <h1>{ light ? "Es ist Tag! 🌞" : "Es ist Nacht! 🌔" }</h1>
      <button onClick={() => setLight(!light)}>{ light ? "Wechsel zu Nacht" : "Wechsel zu Tag"}</button>
      </section>
      
    </div>
  );
}

export default App;
