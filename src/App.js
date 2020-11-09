import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';

// Komponen Popup
function Alert() {
  return <button onClick={() => alert('Thanks a lot...')}>Click Me.</button>
}

// Komponen Menyapa 
function Greeting(props) {
  return(
    <div>
      {props.kata}
    </div>
  );
}

// Komponen Menambah Angka
const Contoh = () => {
  const[count, setCount] = useState(0);
  const[kurang, setKurang] = useState(0);

  useEffect(() => {
    document.title = `my-Project ${count}`
  }) 

  return <div>
      <p>Tambah {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <p>Kurang {kurang}</p>
      <button onClick={() => setKurang(kurang - 1)}>-</button>
  </div>
}

function App() {
  return (
    <div className="App">
      <Alert />
      <Greeting kata='My-app' />
      <Contoh />
    </div>
  );
}

export default App;