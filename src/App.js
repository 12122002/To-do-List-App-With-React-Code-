import logo from './logo.svg';
import './App.css';

function Alert() {
  return <button onClick={() => alert('Thanks a lot...')}>Click Me.</button>
}

function Greeting(props) {
  return(
    <div>
      {props.kata}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting kata='Hallo World'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
