import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';



function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
