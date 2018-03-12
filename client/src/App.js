import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ShowMenu from './components/ShowMenu';
import ShowItem from './components/ShowItem';


const App = () => (
  <div>
    <Banner />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
