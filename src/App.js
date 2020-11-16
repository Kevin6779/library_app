import React from "react";
import { Navbar, Nav , NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import InicioView from "./views/InicioView";
import GeneroView from "./views/GeneroView";
import LibroView from "./views/LibroView";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Libreria Virtual</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/">Inicio</Link>
          <Link to="/genero">ListarGeneros</Link>
          <Link to="/libro">AgregarLibro</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-success">Buscar Por Codigo</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      <Switch>
        <Route exact={true} path="/" component={InicioView}/>
        <Route path="/genero" component={GeneroView}/>
        <Route path="/libro" component={LibroView} />
      </Switch>
</BrowserRouter>
  );
}   

export default App;
    