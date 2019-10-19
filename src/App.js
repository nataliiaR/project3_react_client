import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Home from './components/Home';



export const makeMainRoutes = () => {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
  );
}