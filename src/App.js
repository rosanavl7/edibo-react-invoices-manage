import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoiceForm from "./components/InvoiceForm";
import About from './pages/About'


export default function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/"> Dashboard</Link>
        <Link to="/about"> About</Link>
        <Link to="/new"> Create Invoice</Link>
        <Switch>
        <Route exact path="/" >
              <Dashboard/>
        </Route>
        <Route exact path="/about">
              <About/>
        </Route>
        <Route exact path="/new">
              <InvoiceForm/>
        </Route>
        <Route exact path="/:id">
              <InvoiceDetails/>
        </Route>
        </Switch>
       </div>
    </Router>
  );
}
/*/
function Home() {
  return <h2>Home</h2>;
}

/*function About() {
  return <h2>About</h2>;
}*/
/*
function Users() {
  return <h2>Users</h2>;
}*/
