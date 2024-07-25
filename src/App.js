// import logo from './logo.svg';

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    </div>
  );
}

export default App;
