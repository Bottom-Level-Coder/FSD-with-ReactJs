import logo from './ wheel logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';

// or less ideally

import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const shoot = () =>{
    alert("Great shot");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello there this is B M W
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi there wow 
        </a>
        <button onClick={shoot}>Take the shot!</button>
        <input placeholder='Email...'></input>

        
        <button>Click here</button>
        <Button className='btn btn sucess'>Ok</Button>

        <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      </header>
    </div>
  );
}

export default App;
