import './App.css';
import Navbar from './components/navbar';
import Polygon from './components/Polygon 1.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <textarea className="textBox" />
        <div className="playButton">
          <img src={Polygon} alt="" className="play" />
        </div>
      </div>
    </div>
  );
}

export default App;