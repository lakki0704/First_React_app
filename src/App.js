import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';

import { Navbar, NavbarBrand } from 'reactstrap';


function App() {
    return ( 
<div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">MyFirstReact_App</NavbarBrand>
          </div>
        </Navbar>
      </div>
      // <Navbar title ="Textutils"/>


    );
}

export default App;