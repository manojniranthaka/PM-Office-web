import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './view/header/header';
import Landing from './view/landing/landing';
import Footer from './view/footer/footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
