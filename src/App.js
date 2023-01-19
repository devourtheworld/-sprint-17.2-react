import './App.css';
import React, {useState} from 'react';

export default function App() {
  const initialValue = window.localStorage.getItem('appData') || ''
  const [appData] = useState(initialValue);
  return (
    <div>
      React Marathon, appData: <input value={appData} onChange={() => {window.localStorage.setItem('appData', appData)}} size='5'></input>
    </div>
  );
}
