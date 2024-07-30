import './App.css';
// import Orders from './components/Admin/Ordermanagement';
// import Dashboard from './components/Admin/Dashboard';
// import Homepage from './components/Homepage';
// import logo from './logo.svg';
 import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

//import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
        {/* <Orders/> */}
        {/* // <Dashboard/> */}
        {/* <Homepage/> */}
    </div>
  );
}

export default App;
