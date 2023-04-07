import { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let reset = 0;

  return (
    <div className="App">
      <h1>COUNTER: {count}</h1>
      <section>
      <button onClick={() => setCount(count + 1)}>Upgrade</button>
      <button onClick={() => setCount(count - 1)}>Downgrade</button>
      <button onClick={() => setCount(reset)}>Reset</button>
      </section>
    </div>
  );
}

export default App;
