import logo from './logo.svg';
import './App.css';
//Compoenentes
import List from './components/list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
        <List/>
      </header>
    </div>
  );
}

export default App;
