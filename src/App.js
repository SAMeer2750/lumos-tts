import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <textarea 
        className="textBox"
        />
      </div>
    </div>
  );
}

export default App;