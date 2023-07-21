import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <p>Welcome to CISE</p>
    </div>
  );
}

export default App;
