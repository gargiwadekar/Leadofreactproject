
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  // status: { type: 'Ready'|'Incremented'|'Decremented', value: number|null }
  const [status, setStatus] = useState({ type: 'Ready', value: null });

  const increment = () => {
    setNumber((n) => {
      const next = n + 1;
      setStatus({ type: 'Incremented', value: next });
      return next;
    });
  };

  const decrement = () => {
    setNumber((n) => {
      if (n === 0) {
        alert('Out of range');
        // keep status as Ready if no change
        setStatus({ type: 'Ready', value: n });
        return n;
      }
      const next = n - 1;
      setStatus({ type: 'Decremented', value: next });
      return next;
    });
  };

  const statusClass = status.type.toLowerCase();

  return (
    <div className="container">
      <h1>{number}</h1>

      <div className="action-button">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <div className={`status-box ${statusClass}`}>
        <span className="status-text">
          {status.type === 'Ready' ? 'Ready' : status.type}
        </span>
      </div>
    </div>
  );
}

export default App;
