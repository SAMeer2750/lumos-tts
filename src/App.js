import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <textarea className="textBox" />
        <div className="playButton">
          <svg
            className="play"
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.78461 2.19615L29.2846 15.1865C31.2846 16.3412 31.2846 19.228 29.2846 20.3827L6.78461 33.3731C4.78461 34.5278 2.28461 33.0844 2.28461 30.775L2.28461 4.79423C2.28461 2.48483 4.78461 1.04145 6.78461 2.19615Z"
              stroke="#151515"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;