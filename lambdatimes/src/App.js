import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      {/* <TopBar />
      <Header />
      <Content /> */}
  <Login />
    </div>
  );
}

export default App;
