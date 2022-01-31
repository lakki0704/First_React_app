import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menucomponent';


function App() {
    return ( 
<div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">MyFirstReact_App</NavbarBrand>
          </div>
        </Navbar>
<br />
        <Menu/>

      </div>
      // <Navbar title ="Textutils"/>

     

    );
}

export default App;