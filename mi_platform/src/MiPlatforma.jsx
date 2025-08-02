
import { useState } from 'react';

export default function MiPlatforma() {
  const [ievade, setIevade] = useState('');
  const [atbilde, setAtbilde] = useState('');

  const nosūtīt = () => {
    setAtbilde('🧠 MI atbilde: (demo versija)');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>MI</h1>
      <textarea
        rows="5"
        style={{ width: '100%', marginBottom: '1rem' }}
        placeholder="Ieraksti jautājumu..."
        value={ievade}
        onChange={(e) => setIevade(e.target.value)}
      />
      <br />
      <button onClick={nosūtīt}>Saņemt atbildi</button>
      <div style={{ marginTop: '1rem' }}>{atbilde}</div>
    </div>
  );
}
